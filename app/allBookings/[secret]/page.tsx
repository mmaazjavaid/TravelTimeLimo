import { BookingsTable } from '@/components/Table/BookingsTable';
import { FadeIn } from '@/components/ui/motion';

async function BookingsTablePage({ params }) {
	const awaitedParams = await params;
	const secret = awaitedParams?.secret;

	if (secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center bg-surface p-8">
				<FadeIn className="text-center">
					<h1 className="font-display text-3xl font-bold text-foreground">Unauthorized</h1>
					<p className="mt-2 text-muted-foreground">You don&apos;t have permission to view this page.</p>
				</FadeIn>
			</div>
		);
	}

	let bookingsRes: any = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/bookings`);
	bookingsRes = await bookingsRes.json();
	const { bookings } = bookingsRes;

	return (
		<div className="section-padding bg-surface">
			<div className="section-container max-w-7xl">
				<BookingsTable bookings={bookings} />
			</div>
		</div>
	);
}

export default BookingsTablePage;
