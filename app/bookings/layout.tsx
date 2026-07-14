'use client';
import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { toast } from 'react-toastify';
import { STEPS } from '@/lib/constants';
import BookingDetails from '@/components/bookings/BookingDetail';
import { useRouter, usePathname } from 'next/navigation';
import { Stepper } from '@/components/bookings/stepper';
import BookingFooter from '@/components/bookings/footer';
import { globalStateController } from '@/state/global/globalStateController';

function Layout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const pathname = usePathname();
	const prefersReducedMotion = useReducedMotion();
	// Derived from the URL (not local state) so the stepper can never drift out
	// of sync with the actual route — including when a user clicks a previous
	// step and the browser navigates there directly.
	const stepIndex = STEPS.findIndex(step => step.link === pathname);
	const activeStep = stepIndex === -1 ? 0 : stepIndex;

	const saveBooking = async (stepperForm: any) => {
		try {
			const { paymentInfo, ...bookingData } = stepperForm;
			const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/bookings`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(bookingData),
			});

			const result = await response.json();
			if (!response.ok) throw new Error(result.error || 'Failed to create booking');

			console.log('Booking saved successfully', result);
		} catch (error) {
			console.error('Error saving booking:', error);
		}
	};

	const sendEmail = async (booking: any) => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send-email`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(booking),
			});

			const result = await response.json();
			if (!response.ok) throw new Error(result.error || 'Failed to send booking email');

			console.log('Booking email sent successfully');
		} catch (error) {
			console.error('Error sending email:', error);
		}
	};

	// Reset any error highlighting left over from a previous step as soon as
	// the user actually lands on a new one, so it doesn't look like the fresh
	// step already failed validation.
	useEffect(() => {
		globalStateController.updateState({ showValidationErrors: false });
	}, [pathname]);

	const getMissingFields = (): string[] => {
		const stepperForm = globalStateController.getValue('stepperForm');
		const missing: string[] = [];

		if (STEPS[activeStep].label === 'Pickup Info') {
			// "Provide additional information" (flight number/arrival time, pickup
			// sign, notes, reference code) is genuinely optional — chauffeurs work
			// fine without it — so only the passenger's own contact details are
			// required here.
			const { passengerInfo } = stepperForm;
			if (!passengerInfo?.title) missing.push('Title');
			if (!passengerInfo?.firstName) missing.push('First name');
			if (!passengerInfo?.lastName) missing.push('Last name');
			if (!passengerInfo?.email) missing.push('Email');
			if (!passengerInfo?.phoneNumber) missing.push('Phone number');
		}

		if (STEPS[activeStep].label === 'Payment Info') {
			const { paymentInfo } = stepperForm;
			if (!paymentInfo?.nameOnCard) missing.push('Name on card');
			if (!paymentInfo?.cardNumber) missing.push('Card number');
			if (!paymentInfo?.expirationDate) missing.push('Expiration date');
			if (!paymentInfo?.cvv) missing.push('CVV');
			if (!paymentInfo?.billingAddress) missing.push('Billing address');
			if (!paymentInfo?.city) missing.push('City');
			if (!paymentInfo?.state) missing.push('State');
			if (!paymentInfo?.zip) missing.push('Zip code');
		}

		return missing;
	};

	const isStepValidated = () => getMissingFields().length === 0;

	const handleNextStep = async () => {
		const missingFields = getMissingFields();
		if (missingFields.length > 0) {
			globalStateController.updateState({ showValidationErrors: true });
			toast.error(`Please fill in: ${missingFields.join(', ')}.`);
			return;
		}
		globalStateController.updateState({ showValidationErrors: false });

		const stepperForm = globalStateController.getValue('stepperForm');

		if (activeStep === STEPS.length - 2) {
			await saveBooking(stepperForm);
			await sendEmail(stepperForm);
		}

		if (activeStep < STEPS.length - 1) {
			router.push(STEPS[activeStep + 1].link);
		}
	};

	return (
		<div className="section-padding bg-surface">
			<div className="section-container mx-auto max-w-3xl">
				<Stepper steps={STEPS} activeStep={activeStep} />
				<BookingDetails />
				<div className="overflow-hidden rounded-xl border border-border/60 bg-white p-6 shadow-soft md:p-8">
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={pathname}
							initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
							animate={{ opacity: 1, x: 0 }}
							exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						>
							{children}
						</motion.div>
					</AnimatePresence>
				</div>
				<BookingFooter onNextStep={handleNextStep} />
			</div>
		</div>
	);
}

export default Layout;
