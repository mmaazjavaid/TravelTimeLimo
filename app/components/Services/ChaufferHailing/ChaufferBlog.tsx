import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion';

const cities = ['Dubai, U.A.E', 'Miami, Florida, U.S.'];

export function ChauffeurBlog() {
	return (
		<div className="section-container section-padding">
			<FadeIn>
				<div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
					<div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl shadow-lift">
						<Image
							src="https://images.ctfassets.net/ov8o7v78mnye/5O1WZj5T3ydUe72czaxhG9/23de3620c2c3b6d664a1f0589284e8a3/content-block-2.png?w=1280&fm=webp"
							alt="Luxury chauffeur service"
							className="object-cover"
							fill
							priority
						/>
					</div>
					<div className="space-y-5">
						<h2 className="text-title text-foreground">Convenient on-demand rides within minutes</h2>
						<p className="text-body text-muted-foreground">
							When you need a safe way to get around the city, think Travel Time Limo&apos;s Chauffeur Hailing™. You can
							book the top-quality service you know and love for immediate pickup in the cities listed below.
						</p>
					</div>
				</div>
			</FadeIn>

			<FadeIn delay={0.1}>
				<div className="space-y-6">
					<h3 className="font-display text-2xl font-semibold text-foreground">Chauffeur Hailing™ is available in:</h3>
					<ul className="space-y-3">
						{cities.map((city, index) => (
							<li key={index} className="flex items-center gap-3">
								<span className="h-1.5 w-1.5 rounded-full bg-gold" />
								<span className="text-lg text-foreground">{city}</span>
							</li>
						))}
					</ul>
					<p className="text-muted-foreground italic">Stay tuned for more to come!</p>
				</div>
			</FadeIn>
		</div>
	);
}
