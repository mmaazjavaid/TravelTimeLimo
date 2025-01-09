import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { STYLES } from '@/lib/commonStyles';

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
		name: 'London',
		image: '/premium_photo-1682799116921-de130f76c1d0.jpeg',
		routeCount: 25,
	},
	{
		name: 'Paris',
		image: '/paris.jpg',
		routeCount: 16,
	},
	{
		name: 'Dubai',
		image: '/dubai-palm-jumeirah-island-shutterstock_1291548640.jpg_3ab124c2b9.jpg',
		routeCount: 15,
	},
];

const topRoutes: RouteCard[] = [
	{
		from: 'New York',
		to: 'Philadelphia',
		duration: '1h 50m',
		distance: '59 mi',
	},
	{
		from: 'London',
		to: 'Oxford',
		duration: '1h 45m',
		distance: '96 km',
	},
	{
		from: 'Paris',
		to: 'Reims',
		duration: '2h 15m',
		distance: '145 km',
	},
	{
		from: 'Dubai',
		to: 'Abu Dhabi',
		duration: '1h 15m',
		distance: '136 km',
	},
	{
		from: 'New York',
		to: 'East Hampton',
		duration: '2h 30m',
		distance: '68 mi',
	},
	{
		from: 'Manchester',
		to: 'Liverpool',
		duration: '1h',
		distance: '57 km',
	},
	{
		from: 'Nice',
		to: 'Saint Tropez',
		duration: '1h 40m',
		distance: '112 km',
	},
	{
		from: 'Brisbane',
		to: 'Gold Coast',
		duration: '1h',
		distance: '79 km',
	},
];

export function CityRoutes() {
	return (
		<div className="bg-white">
			<div className="container mx-auto px-4 py-16">
				<div className="space-y-16">
					{/* Top Cities Section */}
					<div>
						<div className="flex items-center justify-between mb-8">
							<h2 className="text-3xl font-bold text-gray-900">Top cities</h2>
							<Link
								href="/city-to-city/routes"
								className="text-primary hover:text-primary-dark transition-colors duration-300"
							>
								See all
							</Link>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{topCities.map(city => (
								<Link key={city.name} href={`/city-to-city/routes`}>
									<Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
										<CardContent className="p-0">
											<div className="relative h-48">
												<Image src={city.image} alt={`${city.name} cityscape`} fill className="object-cover" />
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
												<div className="absolute bottom-4 left-4 text-white">
													<h3 className="font-semibold text-lg">{city.name}</h3>
													<p className="text-sm">{city.routeCount} routes</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
					</div>

					{/* Top Routes Section */}
					<div>
						<div className="flex items-center justify-between mb-8">
							<h2 className="text-3xl font-bold text-gray-900">Top routes</h2>
							<Link
								href="/city-to-city/routes"
								className="text-primary hover:text-primary-dark transition-colors duration-300"
							>
								See all
							</Link>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-4">
							{topRoutes.map(route => (
								<Link key={`${route.from}-${route.to}`} href={`/city-to-city/routes`} className="block group">
									<Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border-2 border-gray-100 transition-transform duration-300 transform group-hover:scale-105">
										<div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-indigo-100 to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

										<CardContent className="relative z-10 p-6 flex flex-col items-start">
											<div className="flex items-center mb-4">
												<span className="text-lg font-semibold text-gray-900">{route.from}</span>
												<ArrowRight className="mx-2 w-6 h-6 text-gray-400" />
												<span className="text-lg font-semibold text-gray-900">{route.to}</span>
											</div>

											<div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
												{route.duration} · {route.distance}
											</div>
										</CardContent>
										<div
											className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${STYLES.gray_white_gradient.color} ${STYLES.transition} opacity-50 group-hover:opacity-80`}
										></div>
									</Card>
								</Link>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<Card className="bg-primary text-white">
						<CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
							<div className="space-y-2">
								<h3 className="text-2xl font-semibold">Have a route in mind?</h3>
								<p className="text-primary-foreground">Enter your pickup and drop-off locations to see the price.</p>
							</div>

							<Link href={'/services/city-city'}>
								<Button size="lg" variant="gradient" className="w-full md:w-auto">
									Book a City-to-City ride
								</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
