import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { globalStateController } from '@/state/global/globalStateController';

const BookingDetails: React.FC = () => {
	const [bookingDate, setBookingDate] = useState('');
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;

	useEffect(() => {
		const date = new Date(bookingInfo?.date);
		const formattedDate = date.toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: '2-digit',
			year: 'numeric',
		});

		setBookingDate(formattedDate);
	}, [bookingInfo?.date]);

	return (
		<div className="bg-gray-200 rounded-lg p-4 mb-8">
			<h2 className="font-semibold">{bookingDate || bookingInfo?.date}</h2>
			{bookingInfo?.from && (
				<p className="text-gray-600">
					<span className="font-semibold">Pick up:</span>
					{` ${bookingInfo?.from}`}
				</p>
			)}

			{bookingInfo?.to && (
				<p className="text-gray-600">
					<span className="font-semibold">Destination:</span>
					{` ${bookingInfo?.to}`}
				</p>
			)}

			<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
				{bookingInfo?.distance ? (
					<>
						<Clock className="h-4 w-4" />
						<span>{bookingInfo?.duration?.text || ''}</span>
					</>
				) : (
					<span>{`Hours: ${bookingInfo?.numberOfHours}` || ''}</span>
				)}
				{bookingInfo?.distance && <span>•{` ${bookingInfo?.distance?.text}` || ''}</span>}
			</div>
		</div>
	);
};

export default BookingDetails;
