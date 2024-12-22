import React from 'react';
import { Clock } from 'lucide-react';
import { BookingDetailsProps } from '@/types/bookings';

const BookingDetails: React.FC<BookingDetailsProps> = ({ date, location, duration, distance }) => {
	return (
		<div className="bg-gray-200 rounded-lg p-4 mb-8">
			<h2 className="font-semibold">{date}</h2>
			<p className="text-gray-600">{location}</p>
			<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
				<Clock className="h-4 w-4" />
				<span>{duration}</span>
				<span>•</span>
				<span>{distance}</span>
			</div>
		</div>
	);
};

export default BookingDetails;
