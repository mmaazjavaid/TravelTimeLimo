import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { globalStateController } from '@/state/global/globalStateController';

const BookingDetails: React.FC = () => {
	const [bookingDate, setBookingDate] = useState('');
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const { bookingInfo, routeInfo } = stepperValues?.stepperForm;

	useEffect(() => {
		if (!bookingInfo?.date) {
			setBookingDate('');
			return;
		}
		const date = new Date(bookingInfo.date);
		if (Number.isNaN(date.getTime())) {
			setBookingDate('');
			return;
		}
		setBookingDate(
			date.toLocaleDateString('en-US', {
				weekday: 'short',
				month: 'short',
				day: '2-digit',
				year: 'numeric',
			})
		);
	}, [bookingInfo?.date]);

	return (
		<aside className="sticky top-24 mb-8 rounded-xl border border-gold/25 bg-ink p-6 text-white shadow-lift">
			<p className="text-label text-gold">Trip Summary</p>
			<h2 className="mt-2 font-display text-xl font-semibold text-white">
				{bookingDate || <span className="text-white/50">Select a date</span>}
			</h2>

			{bookingInfo?.from && (
				<div className="mt-4 border-t border-white/10 pt-4">
					<p className="text-xs font-medium uppercase tracking-wide text-white/50">Pick up</p>
					<p className="mt-1 text-sm text-white/85">{bookingInfo.from}</p>
				</div>
			)}

			{bookingInfo?.to && (
				<div className="mt-3">
					<p className="text-xs font-medium uppercase tracking-wide text-white/50">Destination</p>
					<p className="mt-1 text-sm text-white/85">{bookingInfo.to}</p>
				</div>
			)}

			<div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/60">
				{routeInfo?.distanceText ? (
					<>
						<Clock className="h-4 w-4 shrink-0 text-gold" />
						<span>{routeInfo.durationText}</span>
						<span>· {routeInfo.distanceText}</span>
					</>
				) : (
					<span>Hours: {bookingInfo?.numberOfHours}</span>
				)}
			</div>
		</aside>
	);
};

export default BookingDetails;
