import { Smartphone, Car, Award, User, Shield, DollarSign } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/ui/motion';

const features = [
	{
		icon: Smartphone,
		title: 'Convenience',
		description: 'Get a door-to-door chauffeured ride right when you need with just a few taps in the Travel Time Limo app.',
	},
	{
		icon: Car,
		title: 'Comfort',
		description: 'A private ride in a top-of-the-line vehicle makes every journey a pleasure, not just a means to an end.',
	},
	{
		icon: Award,
		title: 'Quality',
		description: 'Making your experience excellent is our top priority. Enjoy the next-level service you deserve for all your travels.',
	},
	{
		icon: User,
		title: 'Professional chauffeurs',
		description: 'Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion, and more.',
	},
	{
		icon: Shield,
		title: 'Reliability',
		description: 'Book with certainty, then stay in the know with real-time ride status updates and chauffeur location tracking.',
	},
	{
		icon: DollarSign,
		title: 'Competitive rates',
		description: 'Access premium service at distance-based prices that are fair to you and our chauffeurs.',
	},
];

export function FeaturesGrid() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					{features.map((feature, index) => (
						<StaggerItem key={index}>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="mb-4 rounded-2xl border border-gold/20 bg-gold/10 p-5">
									<feature.icon className="h-8 w-8 text-gold-dark" strokeWidth={1.5} />
								</div>
								<h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
								<p className="max-w-[300px] leading-relaxed text-muted-foreground">{feature.description}</p>
							</div>
						</StaggerItem>
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
