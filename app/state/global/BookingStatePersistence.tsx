'use client';

import { useEffect, useRef } from 'react';
import { cloneDeep } from 'lodash';
import { globalStateController } from './globalStateController';
import { BOOKING_STATE_STORAGE_KEY, globalInitialState } from './globalState';

/**
 * Bridges the in-memory Hookstate store to sessionStorage so a page refresh
 * mid-booking restores what the customer already entered instead of silently
 * resetting to defaults (which is what produced "Invalid Date" in the trip
 * summary — bookingInfo.date going back to '').
 *
 * `paymentInfo` (card number, expiration, CVV, billing address) is
 * deliberately never written to or read from storage — payment details must
 * never persist client-side, even to sessionStorage, even briefly. It's
 * stripped before every write, and forced back to its empty shape on every
 * restore (so a page that already had a stale card number saved before this
 * fix existed gets sanitized on next load too, not just new sessions).
 *
 * Restoring happens in an effect (after mount), deliberately not at module
 * load time, so the server-rendered HTML and the first client render always
 * match — avoiding a hydration mismatch. The one-render "flash" from empty
 * to restored values is the standard, accepted tradeoff for this pattern.
 */
export function BookingStatePersistence() {
	const hasRestored = useRef(false);
	const state = globalStateController.useCompleteState();

	useEffect(() => {
		try {
			const raw = window.sessionStorage.getItem(BOOKING_STATE_STORAGE_KEY);
			if (raw) {
				const saved = JSON.parse(raw);
				if (saved && typeof saved === 'object') {
					globalStateController.updateState({
						...saved,
						stepperForm: {
							...saved.stepperForm,
							paymentInfo: cloneDeep(globalInitialState.stepperForm.paymentInfo),
						},
					});
				}
			}
		} catch (e) {
			console.error('Failed to restore booking state from sessionStorage:', e);
		} finally {
			hasRestored.current = true;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!hasRestored.current) return; // don't overwrite storage with pre-restore defaults
		try {
			const fullState = state.get({ noproxy: true }) as any;
			const { paymentInfo, ...restStepperForm } = fullState.stepperForm || {};
			window.sessionStorage.setItem(
				BOOKING_STATE_STORAGE_KEY,
				JSON.stringify({ ...fullState, stepperForm: restStepperForm })
			);
		} catch (e) {
			// sessionStorage unavailable (private browsing, storage full, etc.) — non-critical.
		}
	});

	return null;
}
