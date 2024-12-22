import RideCard from '../components/bookings/service-class/RideCard';
import AmenitiesList from '../components/bookings/service-class/Amenities';
import Notes from '../components/bookings/service-class/Notes';
import BookingDetails from '../components/bookings/service-class/BookingDetail';
import BookingFooter from '../components/bookings/footer';
import { Stepper } from '../components/bookings/stepper';
import { JSX } from 'react';
import { STEPS } from '../lib/constants';

export default function BookingPage(): JSX.Element {
	return (
		<div className="min-h-screen bg-white">
			<main className="container mx-auto px-4 py-8 max-w-3xl">
				{/* Stepper */}
				<div className="mb-8 w-[80%] mx-auto">
					<Stepper steps={STEPS} />
				</div>

				{/* Booking Details */}
				<BookingDetails
					date="Fri, Dec 20, 2024"
					location="New York LaGuardia Airport (LGA)"
					duration="2 hours"
					distance="incl. 40 km"
				/>

				<p className="text-sm text-gray-500 mb-4">All prices include VAT, fees, and tolls</p>

				{/* Car Options */}
				<RideCard />

				{/* Amenities and Notes */}
				<div className="border border-gray-300 rounded-lg mt-8">
					<div className="divide-y divide-gray-300">
						<AmenitiesList />
						<Notes />
					</div>
				</div>

				{/* Footer Actions */}
				<BookingFooter />
			</main>
		</div>
	);
}
