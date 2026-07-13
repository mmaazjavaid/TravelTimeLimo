import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion';

interface CityCard {
	name: string;
	image: string;
	routeCount: number;
}

interface RouteCard {
	from: string;
	to: string;
	duration: string;
	distance: string;
}

const topCities: CityCard[] = [
	{
		name: 'New York',
		image: '/medium-new-york-skyline-wallpaper-print-on-fine-art-paper-hd-original-imagbukjkbg9rjkn.webp',
		routeCount: 21,
	},
	{
		name: 'Austin',
		image: '/austin.jpeg',
		routeCount: 25,
	},
	{
		name: 'Man Hattan',
		image: '/manhattan.jpg',
		routeCount: 16,
	},
	{
		name: 'Brooklyn',
		image: '/Brooklyn.jpeg',
		routeCount: 15,
	},
];

const topRoutes: RouteCard[] = [
	{ from: 'Newyork', to: 'Philadelphia', duration: '1h 50m', distance: '59 mi' },
	{ from: 'Newyork', to: 'EastHampton', duration: '2h 30m', distance: '68 mi' },
	{ from: 'Newyork', to: 'Oxford', duration: '1h 45m', distance: '96 km' },
	{ from: 'Newyork', to: 'Reims', duration: '2h 15m', distance: '145 km' },
	{ from: 'Austin', to: 'San Antonio', duration: '1h 20m', distance: '80 mi' },
	{ from: 'Austin', to: 'Houston', duration: '2h 30m', distance: '165 mi' },
	{ from: 'Austin', to: 'Dallas', duration: '3h 0m', distance: '195 mi' },
	{ from: 'Austin', to: 'Waco', duration: '1h 40m', distance: '102 mi' },
];

export function CityRoutes() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container space-y-16">
				{/* Top Cities */}
				<div>
					<FadeIn className="mb-8 flex items-center justify-between">
						<h2 className="text-title text-foreground">Top cities</h2>
						<Link
							href="/city-to-city/routes"
							className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
						>
							See all <ArrowRight className="h-4 w-4" />
						</Link>
					</FadeIn>
					<StaggerChildren className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						{topCities.map(city => (
							<StaggerItem key={city.name}>
								<Link href="/city-to-city/routes" className="group block">
									<Card className="overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
										<CardContent className="p-0">
											<div className="relative h-48">
												<Image
													src={city.image}
													alt={`${city.name} cityscape`}
													fill
													className="object-cover transition-transform duration-500 group-hover:scale-105"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
												<div className="absolute bottom-4 left-4 text-white">
													<h3 className="font-display text-lg font-semibold">{city.name}</h3>
													<p className="text-sm text-white/70">{city.routeCount} routes</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
							</StaggerItem>
						))}
					</StaggerChildren>
				</div>

				{/* Top Routes */}
				<div>
					<FadeIn className="mb-8 flex items-center justify-between">
						<h2 className="text-title text-foreground">Top routes</h2>
						<Link
							href="/city-to-city/routes"
							className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
						>
							See all <ArrowRight className="h-4 w-4" />
						</Link>
					</FadeIn>
					<StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{topRoutes.map(route => (
							<StaggerItem key={`${route.from}-${route.to}`}>
								<Link href="/city-to-city/routes" className="group block">
									<Card className="border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift">
										<CardContent className="p-5">
											<div className="mb-3 flex items-center">
												<span className="font-medium text-foreground">{route.from}</span>
												<ArrowRight className="mx-2 h-4 w-4 text-muted-foreground" />
												<span className="font-medium text-foreground">{route.to}</span>
											</div>
											<p className="text-sm text-muted-foreground">
												{route.duration} · {route.distance}
											</p>
										</CardContent>
									</Card>
								</Link>
							</StaggerItem>
						))}
					</StaggerChildren>
				</div>

				{/* CTA */}
				<FadeIn>
					<Card className="relative overflow-hidden border-none bg-ink text-white shadow-lift">
						<div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
						<CardContent className="relative flex flex-col items-center justify-between gap-6 p-8 md:flex-row md:p-10">
							<div className="space-y-2 text-center md:text-left">
								<h3 className="font-display text-2xl font-semibold md:text-3xl">Have a route in mind?</h3>
								<p className="text-white/70">Enter your pickup and drop-off locations to see the price instantly.</p>
							</div>
							<Link href="/services/city-city">
								<Button size="lg" variant="gradient" className="w-full px-8 md:w-auto">
									Book a City-to-City ride
								</Button>
							</Link>
						</CardContent>
					</Card>
				</FadeIn>
			</div>
		</section>
	);
}
