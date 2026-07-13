import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion';

const journeyTypes = [
	{
		title: 'Business trips:',
		description:
			'Make the most of your business appointments. No need to worry about logistics, wait times, or rushing from one place to the next when you have a day full of meetings, a roadshow, etc.',
	},
	{
		title: 'Leisure activities:',
		description:
			'Go sightseeing, shopping, fine dining, in style. It\'s easy to flit between all your engagements with a private hourly chauffeur service.',
	},
	{
		title: 'Events:',
		description:
			'The show\'s not over until you say so. For big games, premieres, galas, concerts, and more, have your car waiting and you won\'t have to compete with hundreds of others for a ride home.',
	},
];

export function MultiStopJourney() {
	return (
		<div className="section-container section-padding space-y-24">
			<FadeIn>
				<div className="grid gap-10 lg:grid-cols-2">
					<div className="relative min-h-[300px]">
						<Image
							src="https://images.ctfassets.net/ov8o7v78mnye/65tnv3nW9oul6R0h2w0Dt8/f443793967858bf9be8db729d1524ef5/Blacklane-London-Social-14-_3_.jpg?w=1280&fm=webp"
							alt="Luxury chauffeur service with black car"
							className="rounded-2xl object-cover shadow-lift"
							fill
							priority
						/>
					</div>
					<div className="space-y-5">
						<h2 className="text-title text-foreground">For all your multi-stop journeys</h2>
						<p className="text-body text-muted-foreground">
							Convenient, comfortable, and flexible. Our hourly chauffeur service is tailored to those occasions when
							you want a chauffeur on standby.
						</p>
						<ul className="space-y-4">
							{journeyTypes.map((type, index) => (
								<li key={index} className="flex gap-3">
									<span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
									<div>
										<span className="font-semibold text-foreground">{type.title}</span>{' '}
										<span className="text-muted-foreground">{type.description}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</FadeIn>

			<FadeIn delay={0.1}>
				<div className="grid gap-10 lg:grid-cols-2">
					<div className="space-y-5 lg:pr-12">
						<h2 className="text-title text-foreground">US reach</h2>
						<p className="text-body text-muted-foreground">
							With professional chauffeurs in hundreds of cities spanning{' '}
							<span className="font-semibold text-foreground">more than 50 countries</span>, you can make
							by-the-hour reservations for all your travels. Wherever you go, you can expect the same top-quality
							experience.
						</p>
					</div>
					<div className="relative h-[300px] lg:h-[400px]">
						<Image
							src="https://images.ctfassets.net/ov8o7v78mnye/2T2z4Oh9PtQDNR7zeUewpE/f8f2db2c39510a0c1f3d42a69e5bcad0/BL_Map__1_.jpg?w=1280&fm=webp"
							alt="Global coverage map showing Travel Time Limo's presence"
							className="object-contain"
							fill
						/>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}
