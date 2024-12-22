import { PriceBreakdownProps } from '@/types/bookings';

const PriceBreakdown = ({ baseFare, meetAndGreet, tax }: PriceBreakdownProps) => {
	return (
		<div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">Price breakdown</h3>
				<span className="font-semibold">Rate</span>
			</div>
			<div className="space-y-2">
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Base fare</span>
					<span>US${baseFare.toFixed(2)}</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Meet and greet</span>
					<span>US${meetAndGreet.toFixed(2)}</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-gray-600">Tax</span>
					<span>US${tax.toFixed(2)}</span>
				</div>
			</div>
		</div>
	);
};

export default PriceBreakdown;
