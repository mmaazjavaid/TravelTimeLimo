import { Globe, User, MapPin } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/ui/motion';

const features = [
	{
		icon: User,
		title: 'Professional chauffeurs',
		description:
			'Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion, and more.',
	},
	{
		icon: MapPin,
		title: 'Door-to-door convenience',
		description:
			'Rest easy with door-to-door pickup and drop-off: no waiting in lines or change of transportation needed.',
	},
	{
		icon: Globe,
		title: 'Global quality, local experts',
		description:
			'Enjoy world class luxury and professionalism alongside local knowledge. Your chauffeur is here to help you make the most of your journey.',
	},
];

export function Features() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
					{features.map(feature => (
						<StaggerItem key={feature.title}>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="mb-4 rounded-2xl border border-gold/20 bg-gold/10 p-5">
									<feature.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
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
