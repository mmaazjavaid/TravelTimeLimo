import { BookingsTable } from '@/components/Table/BookingsTable';

async function BookingsTablePage({ params }) {
	const awaitedParams = await params;
	const secret = awaitedParams?.secret;

	if (secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
		return <h1 className="p-72 text-center font-bold text-3xl">Opps! Unauthorized</h1>;
	}

	let bookingsRes: any = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/bookings`);
	bookingsRes = await bookingsRes.json();
	const { bookings } = bookingsRes;

	return <BookingsTable bookings={bookings} />;
}

export default BookingsTablePage;
