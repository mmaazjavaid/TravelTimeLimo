import { Clock, Plane, Receipt } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/ui/motion';

const features = [
	{
		icon: Receipt,
		title: 'Competitive rates',
		description: 'Access premium service at distance-based prices that are fair to you and our chauffeurs.',
	},
	{
		icon: Plane,
		title: 'Seamless airport travel',
		description: 'Relax with 1 hour of complimentary wait time and flight tracking.',
	},
	{
		icon: Clock,
		title: 'Travel on your terms',
		description:
			'Stay flexible and in charge of your schedule. It\'s quick and easy for you to cancel or make changes to any ride.',
	},
];

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
	const Icon = feature.icon;
	return (
		<div className="flex flex-col items-center space-y-4 text-center">
			<div className="mb-4 rounded-2xl border border-gold/20 bg-gold/10 p-5">
				<Icon className="h-8 w-8 text-gold-dark" strokeWidth={1.5} />
			</div>
			<h3 className="font-display text-xl font-semibold text-foreground">{feature.title}</h3>
			<p className="max-w-[300px] leading-relaxed text-muted-foreground">{feature.description}</p>
		</div>
	);
}

export default function Features() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<StaggerChildren className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
					{features.map((feature, index) => (
						<StaggerItem key={index}>
							<FeatureCard feature={feature} />
						</StaggerItem>
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
