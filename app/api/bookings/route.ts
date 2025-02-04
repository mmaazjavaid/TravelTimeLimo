import connectToDatabase from '@/lib/mongodb';
import Booking from '@/models/booking';
import { NextResponse } from 'next/server';

export async function GET() {
	await connectToDatabase();
	const bookings = await Booking.find();
	return NextResponse.json({ bookings });
}

export async function POST(req: Request) {
	await connectToDatabase();
	const body = await req.json();
	const newBooking = new Booking(body);
	const savedBooking = await newBooking.save();
	return NextResponse.json({ booking: savedBooking });
}
