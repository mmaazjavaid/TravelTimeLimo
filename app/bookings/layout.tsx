import { ReactNode } from 'react';
import { STEPS } from '@/lib/constants';
import { Stepper } from '@/components/bookings/Stepper';
import BookingFooter from '@/components/bookings/Footer';
import BookingDetails from '@/components/bookings/BookingDetail';

function Layout({ children }: { children: ReactNode }) {
	return (
		<main className="container mx-auto px-4 py-8 max-w-3xl">
			{/* Stepper */}
			<Stepper steps={STEPS} />

			<BookingDetails
				date="Fri, Dec 20, 2024"
				location="New York LaGuardia Airport (LGA)"
				duration="2 hours"
				distance="incl. 40 km"
			/>

			{/* Main Content (Children) */}
			{children}

			{/* Footer Actions */}
			<BookingFooter />
		</main>
	);
}

export default Layout;
