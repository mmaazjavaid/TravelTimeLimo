import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BookingFooter: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pb-8">
			<Link
				href="/terms"
				target="_blank"
				className="text-gray-600 underline hover:text-gray-800 transition-colors"
			>
				View terms & conditions
			</Link>
			<Button className="w-full sm:w-auto text-white text-lg py-6 px-8 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all">
				Continue
			</Button>
		</div>
	);
};

export default BookingFooter;
