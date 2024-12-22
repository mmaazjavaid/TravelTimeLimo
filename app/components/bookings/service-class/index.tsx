import { JSX } from 'react';
import Notes from './Notes';
import RideCard from './RideCard';
import AmenitiesList from './Amenities';

export default function ServiceClass(): JSX.Element {
	return (
		<>
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
		</>
	);
}
