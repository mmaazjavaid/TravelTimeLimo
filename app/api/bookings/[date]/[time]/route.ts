import connectToDatabase from '@/lib/mongodb';
import Booking from '@/models/booking';
import { NextResponse } from 'next/server';
import moment from 'moment';
import { BOOKING_GAP_IN_MINUTES } from '@/lib/constants';

export const GET = async (req: Request, { params }) => {
	await connectToDatabase();
	const { date, time } = await params;

	// Find the most recent booking on the same date, ordered by time
	const lastBooking = await Booking.findOne({ 'bookingInfo.date': date }).sort({ 'bookingInfo.time': -1 });

	// Convert the time into a Date object (assuming 'time' is in "HH:mm" format)
	const newBookingTime = moment(`${date}T${time}:00`, 'YYYY-MM-DDTHH:mm:ss').toDate();
	const lastBookingTime = moment(`${date}T${lastBooking?.bookingInfo?.time}:00`, 'YYYY-MM-DDTHH:mm:ss').toDate();

	// Calculate time difference
	const timeDifference = moment(newBookingTime).diff(moment(lastBookingTime), 'minutes');

	// If there is no previous booking or the time difference is sufficient
	if (!lastBooking || Math.abs(timeDifference) >= BOOKING_GAP_IN_MINUTES) {
		return NextResponse.json({ available: true });
	} else {
		// If the last booking time is too close
		return NextResponse.json({
			available: false,
			message: `Some other booking at this slot. Please select a time at least ${BOOKING_GAP_IN_MINUTES} minutes apart.`,
		});
	}
};
