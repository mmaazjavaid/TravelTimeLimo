import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BookingFooter: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pb-8">
			<Link href="/terms" target="_blank" className="text-gray-600 underline hover:text-gray-800 transition-colors">
				View terms & conditions
			</Link>
			<Button
				onClick={onNextStep}
				variant="gradient"
				className="w-full sm:w-auto text-white text-lg py-6 px-8 rounded-xl"
			>
				Continue
			</Button>
		</div>
	);
};

export default BookingFooter;
