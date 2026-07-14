'use client';
import { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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

	const isStepValidated = () => {
		const stepperForm = globalStateController.getValue('stepperForm');
		if (STEPS[activeStep].label === 'Pickup Info') {
			const { passengerInfo, pickUpInfo } = stepperForm;
			const { title, firstName, lastName, email, phoneNumber } = passengerInfo;

			if (stepperForm?.isAirport) {
				const { flightNumber, pickupSign, flightArrivalTime } = pickUpInfo;
				if (!flightNumber || !pickupSign || !flightArrivalTime) return false;
			}

			if (title && firstName && lastName && email && phoneNumber) return true;
			return false;
		}

		if (STEPS[activeStep].label === 'Payment Info') {
			const { paymentInfo } = stepperForm;
			const { nameOnCard, cardNumber, expirationDate, cvv, billingAddress, city, state, zip } = paymentInfo;

			if (nameOnCard && cardNumber && expirationDate && cvv && billingAddress && city && state && zip) return true;
			return false;
		}

		return true;
	};

	const handleNextStep = async () => {
		const stepperForm = globalStateController.getValue('stepperForm');

		if (activeStep === STEPS.length - 2 && isStepValidated()) {
			await saveBooking(stepperForm);
			await sendEmail(stepperForm);
		}

		if (activeStep < STEPS.length - 1 && isStepValidated()) {
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
