import { PriceBreakdownProps } from '@/types/bookings';

const PriceBreakdown = ({ baseFare, meetAndGreet, tax }: PriceBreakdownProps) => {
	return (
		<div className="mt-4 space-y-4 rounded-lg bg-surface p-4">
			<div className="flex items-center justify-between">
				<h3 className="font-semibold text-foreground">Price breakdown</h3>
				<span className="text-sm font-medium text-muted-foreground">Rate</span>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Base fare</span>
					<span className="font-medium">US${baseFare.toFixed(2)}</span>
				</div>
				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Meet and greet</span>
					<span className="font-medium">US${meetAndGreet.toFixed(2)}</span>
				</div>
				<div className="flex items-center justify-between text-sm">
					<span className="text-muted-foreground">Tax</span>
					<span className="font-medium">US${tax.toFixed(2)}</span>
				</div>
				<div className="flex items-center justify-between border-t border-border/60 pt-2 text-sm font-semibold">
					<span className="text-foreground">Total</span>
					<span className="text-gold-dark">US${(baseFare + meetAndGreet + tax).toFixed(2)}</span>
				</div>
			</div>
		</div>
	);
};

export default PriceBreakdown;
