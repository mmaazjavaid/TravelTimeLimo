'use client';
import { ReactNode, useState } from 'react';
import { STEPS } from '@/lib/constants';
import BookingDetails from '@/components/bookings/BookingDetail';
import { useRouter } from 'next/navigation';
import { Stepper } from '@/components/bookings/stepper';
import BookingFooter from '@/components/bookings/footer';
import { globalStateController } from '@/state/global/globalStateController';

function Layout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const [activeStep, setActiveStep] = useState<number>(0);

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
	}

	const handleNextStep = async () => {
		const stepperForm = globalStateController.getValue('stepperForm');

		if (activeStep === STEPS.length - 2 && isStepValidated()) {
			await saveBooking(stepperForm);
			await sendEmail(stepperForm);
		}


		if (activeStep < STEPS.length - 1 && isStepValidated()) {
			setActiveStep(prev => prev + 1);
			router.push(STEPS[activeStep + 1].link);
		}
	};

	return (
		<main className="container mx-auto my-4 px-4 py-8 max-w-3xl">
			{/* Stepper */}
			<Stepper steps={STEPS} activeStep={activeStep} setActiveStep={setActiveStep} />

			<BookingDetails />

			{/* Main Content (Children) */}
			{children}

			{/* Footer Actions */}
			<BookingFooter onNextStep={handleNextStep} />
		</main>
	);
}

export default Layout;
