import connectToDatabase from '@/lib/mongodb';
import Booking from '@/models/booking';
import { NextResponse } from 'next/server';

export async function GET() {
await connectToDatabase();
const bookings = await Booking.find();
return NextResponse.json({ bookings });
}
