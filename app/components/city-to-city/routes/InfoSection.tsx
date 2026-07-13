import React from 'react';
import Image from 'next/image';
import RouteListCard from './RouteListCard';
import { CITY_TO_CITY_ROUTES } from '@/lib/constants';
import { FadeIn } from '@/components/ui/motion';

const InfoSection: React.FC = () => {
	return (
		<section className="section-container section-padding">
			<FadeIn>
				<div className="overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-soft">
					<div className="flex flex-col md:flex-row">
						<div className="relative h-[250px] w-full sm:h-[350px] md:h-[300px] md:w-1/3">
							<Image
								src="/cab-203486_960_720.jpg"
								alt="Professional chauffeur standing by luxury vehicle"
								className="object-cover"
								fill
							/>
						</div>
						<div className="flex flex-1 flex-col justify-center p-8 md:p-12">
							<div className="max-w-xl">
								<h2 className="mb-4 font-display text-2xl font-semibold text-foreground">The better way between cities</h2>
								<p className="text-muted-foreground">
									Book door-to-door chauffeured rides around the world with Travel Time Limo. Your safe, private,
									comfortable ride awaits!
								</p>
							</div>
						</div>
					</div>
				</div>
			</FadeIn>

			<div className="mt-12 space-y-8">
				<FadeIn>
					<h2 className="text-title text-foreground">Travel Time Limo&apos;s City-to-City routes include:</h2>
				</FadeIn>
				<RouteListCard routes={CITY_TO_CITY_ROUTES} />
			</div>
		</section>
	);
};

export default InfoSection;
