import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';

export function BlogsSection() {
	return (
		<div className="w-full bg-surface">
			<section className="section-container section-padding">
				<FadeIn>
					<div className="grid items-center gap-10 lg:grid-cols-2">
						<div className="space-y-5">
							<h2 className="text-title text-foreground">Airport transfer in US cities</h2>
							<p className="text-body text-muted-foreground">
								If you&apos;ve just stepped off a plane, tired and aching from a long flight, there can be no better
								stress-reliever than a Travel Time Limo airport transfer direct to your destination. Travel Time Limo
								transfers are available in{' '}
								<span className="font-medium text-foreground underline decoration-gold/50">hundreds of cities</span>{' '}
								and airports across the world.
							</p>
							<p className="text-body text-muted-foreground">
								Wherever you go, our professional drivers can track your flight and adjust for any delays outside of your
								control. They&apos;re hand-picked and locally knowledgeable, so feel free to ask them for tips or advice.
							</p>
						</div>
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
							<Image
								src="/cab-203486_960_720.jpg"
								alt="Professional driver helping a passenger into a luxury vehicle"
								className="object-cover"
								fill
								priority
							/>
						</div>
					</div>
				</FadeIn>
			</section>

			<section className="section-container section-padding pt-0">
				<FadeIn>
					<div className="grid items-center gap-10 lg:grid-cols-2">
						<div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-lift lg:order-1">
							<Image src="/taxiapp.avif" alt="Chauffeur loading luggage into a luxury car" className="object-cover" fill />
						</div>
						<div className="order-1 space-y-5 lg:order-2">
							<h2 className="text-title text-foreground">Get to or from the airport</h2>
							<p className="text-body text-muted-foreground">
								<Link href="#" className="font-medium text-gold underline-offset-4 hover:text-gold-dark hover:underline">
									A Travel Time Limo chauffeur service
								</Link>{' '}
								aims to achieve the very highest possible standards for all its passengers. Whether you&apos;re stepping out
								of LAX in California on business or need a drop-off at Bangkok International Airport, Travel Time Limo
								will get you there relaxed and ready.
							</p>
							<p className="text-body text-muted-foreground">
								Traveling with family or colleagues? A Travel Time Limo Business Van can be shared by up to five people
								together, with plenty of room for luggage.
							</p>
						</div>
					</div>
				</FadeIn>
			</section>

			<section className="section-container section-padding pt-0">
				<FadeIn>
					<div className="grid items-center gap-10 lg:grid-cols-2">
						<div className="space-y-5">
							<h2 className="text-title text-foreground">Airport shuttle booking</h2>
							<p className="text-body text-muted-foreground">
								The booking of{' '}
								<Link href="#" className="font-medium text-gold underline-offset-4 hover:text-gold-dark hover:underline">
									Travel Time Limo&apos;s limousine service
								</Link>{' '}
								is easy and requires just a few seconds. Provide pickup and destination data, select your vehicle class,
								and confirm.
							</p>
							<p className="text-body text-muted-foreground">
								Travel Time Limo prides itself on transparency — the price you see is the price you pay.
							</p>
						</div>
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
							<Image src="/03_Shuttle.webp" alt="Passengers waiting by a luxury vehicle" className="object-cover" fill />
						</div>
					</div>
				</FadeIn>
			</section>
		</div>
	);
}
