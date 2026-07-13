import { JSX } from 'react';
import Notes from './Notes';
import RideCard from './RideCard';
import AmenitiesList from './Amenities';
import { SERVICE_CLASS_NOTES } from '@/lib/constants';

export default function ServiceClass(): JSX.Element {
	return (
		<>
			<p className="mb-4 text-sm text-muted-foreground">All prices include VAT, fees, and tolls</p>
			<RideCard />
			<div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-white shadow-soft">
				<div className="divide-y divide-border/60">
					<AmenitiesList />
					<Notes notes={SERVICE_CLASS_NOTES} />
				</div>
			</div>
		</>
	);
}
