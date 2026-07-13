import type { RouteListProps } from '@/types/city-to-city';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion';

const RouteListCard = ({ routes }: RouteListProps) => {
	return (
		<div className="space-y-12">
			{routes.map(countryRoutes => (
				<FadeIn key={countryRoutes.country}>
					<h2 className="mb-6 font-display text-2xl font-semibold text-foreground">{countryRoutes.country}</h2>
					<StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{countryRoutes.routes.map(route => (
							<StaggerItem key={route.id}>
								<Link
									href={`/city-to-city/routes/${route.id}`}
									className="group block rounded-xl border border-border/60 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
								>
									<div className="space-y-3">
										<div>
											<div className="text-label text-muted-foreground">From</div>
											<div className="font-medium text-foreground">{route.from}</div>
										</div>
										<div>
											<div className="text-label text-muted-foreground">To</div>
											<div className="font-medium text-foreground">{route.to}</div>
										</div>
										<div className="flex items-center justify-between border-t border-border/60 pt-3 text-sm text-muted-foreground">
											<span>{route.duration}</span>
											<span className="inline-flex items-center gap-1 font-medium text-gold transition-colors group-hover:text-gold-dark">
												{route.distance}
												<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
											</span>
										</div>
									</div>
								</Link>
							</StaggerItem>
						))}
					</StaggerChildren>
				</FadeIn>
			))}
		</div>
	);
};

export default RouteListCard;
