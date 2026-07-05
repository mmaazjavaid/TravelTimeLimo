import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { globalStateController } from '@/state/global/globalStateController';

const BookingDetails: React.FC = () => {
	const [bookingDate, setBookingDate] = useState('');
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const { bookingInfo, routeInfo } = stepperValues?.stepperForm;

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
		<div className="mb-8 rounded-xl border border-gold/25 bg-ink p-5 text-white shadow-lg">
			<h2 className="font-display text-lg font-semibold text-gold">{bookingDate || bookingInfo?.date}</h2>
			{bookingInfo?.from && (
				<p className="mt-2 text-sm text-white/85">
					<span className="font-semibold text-white">Pick up:</span>
					{` ${bookingInfo?.from}`}
				</p>
			)}

			{bookingInfo?.to && (
				<p className="mt-1 text-sm text-white/85">
					<span className="font-semibold text-white">Destination:</span>
					{` ${bookingInfo?.to}`}
				</p>
			)}

			<div className="mt-3 flex items-center gap-2 text-sm text-white/60">
				{routeInfo?.distanceText ? (
					<>
						<Clock className="h-4 w-4 text-gold" />
						<span>{routeInfo?.durationText || ''}</span>
						<span>•{` ${routeInfo?.distanceText}` || ''}</span>
					</>
				) : (
					<span>{`Hours: ${bookingInfo?.numberOfHours}` || ''}</span>
				)}
			</div>
		</div>
	);
};

export default BookingDetails;
