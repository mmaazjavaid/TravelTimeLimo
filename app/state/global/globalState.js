import { hookstate } from '@hookstate/core';
import { cloneDeep } from 'lodash';

// Booking-in-progress data is restored from sessionStorage after mount (see
// BookingStatePersistence) so a page refresh mid-booking doesn't wipe
// everything the customer already entered — that was the direct cause of the
// "Invalid Date" trip summary on refresh: bookingInfo.date reset to '' and
// got formatted as `new Date('')`.
export const BOOKING_STATE_STORAGE_KEY = 'ttl-booking-state-v1';

export const globalInitialState = {
	stepperForm: {
		bookingInfo: {
			type: 'oneWay',
			from: '',
			to: '',
			date: '',
			time: '',
			numberOfHours: 0,
			vehicleType: 'business_class',
			passengers: 3,
			totalFare: 215.94,
			luggage: 2,
			baseFare: 188.72,
			meetAndGreet: 9.63,
			tax: 17.59,
		},
		passengerInfo: {
			// Controlled <Input>/<Select> components need a defined value
			// (string) from the very first render — `null` here caused React's
			// "`value` prop on `input` should not be null" warning (and, after
			// a refresh restores this exact shape via BookingStatePersistence,
			// a full dev-mode error overlay) as soon as any of these mounted.
			title: '',
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
		},
		pickUpInfo: {
			flightNumber: '',
			flightArrivalTime: '',
			pickupSign: '',
			notes: '',
			referenceCode: '',
		},
		paymentInfo: {
			nameOnCard: '',
			cardNumber: '',
			expirationDate: '',
			cvv: '',
			city: '',
			zip: '',
			state: '',
			billingAddress: '',
			saveCard: false,
		},
		routeInfo: {
			distanceText: '',
			distanceValue: 0,
			durationText: '',
			durationValue: 0,
		},
		isTermsAgreed: false,
	},
	// Flips true when "Continue" is clicked with required fields still empty,
	// so the form components know to render inline field errors. Reset to
	// false as soon as the step actually validates or the user moves on.
	showValidationErrors: false,
};

export const globalState = hookstate(cloneDeep(globalInitialState));
