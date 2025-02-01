'use client';
import { ReactNode, useState } from 'react';
import { STEPS } from '@/lib/constants';
import BookingDetails from '@/components/bookings/BookingDetail';
import { useRouter } from 'next/navigation';
import { Stepper } from '@/components/bookings/Stepper';
import BookingFooter from '@/components/bookings/Footer';
import { globalStateController } from '@/state/global/globalStateController';

function Layout({ children }: { children: ReactNode }) {
	const router = useRouter();
	const [activeStep, setActiveStep] = useState<number>(0);

	const handleNextStep = async () => {
		const stepperForm = globalStateController.getValue('stepperForm');

		if (activeStep === STEPS.length - 2) {
			try {
				// const response = await fetch('/api/send-email', {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	},
				// 	body: JSON.stringify({ stepperForm }),
				// });

				// const result = await response.json();

				// if (response.ok) {
				// 	console.log('Email sent successfully:', result);
				// } else {
				// 	console.error('Failed to send email:', result.error);
				// }
				// setActiveStep(prev => prev + 1);
				// router.push(STEPS[activeStep + 1].link);
			} catch (error) {
				console.error('Error sending email:', error);
			}
		}

		if (activeStep < STEPS.length - 1) {
			setActiveStep(prev => prev + 1);
			router.push(STEPS[activeStep + 1].link);
		}
	};


	return (
		<main className="container mx-auto px-4 py-8 max-w-3xl">
			{/* Stepper */}
			<Stepper steps={STEPS} activeStep={activeStep} setActiveStep={setActiveStep} />

			<BookingDetails
				date="Fri, Dec 20, 2024"
				location="New York LaGuardia Airport (LGA)"
				duration="2 hours"
				distance="incl. 40 km"
			/>

			{/* Main Content (Children) */}
			{children}

			{/* Footer Actions */}
			<BookingFooter onNextStep={handleNextStep} />
		</main>
	);
}

export default Layout;
