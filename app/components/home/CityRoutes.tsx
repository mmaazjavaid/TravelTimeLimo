import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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
		image:
			'https://images.ctfassets.net/ov8o7v78mnye/6RMo2vd8ZO6Q8a28ueWQKy/8f7ab73d521e854d0fd60e04bb2e3dc0/new_york.jpg',
		routeCount: 21,
	},
	{
		name: 'London',
		image:
			'https://images.ctfassets.net/ov8o7v78mnye/5yCNBv190AI6oAYWiEiUoY/7ec09bb6e24efb79306b112681f43429/london.jpg',
		routeCount: 25,
	},
	{
		name: 'Paris',
		image:
			'https://images.ctfassets.net/ov8o7v78mnye/3CPEPDD4negGa4s4Eii4qu/cd924f547e994855f60415343d6b6521/paris.jpg',
		routeCount: 16,
	},
	{
		name: 'Dubai',
		image: 'https://images.ctfassets.net/ov8o7v78mnye/I066HOHnciYmIIAWCaIaa/6445a014eac5f045721acbf4d39d9719/dubai.jpg',
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
		<div className="bg-[#F0F0F0]">
			<div className="container mx-auto px-4 py-8">
				<div className="space-y-8">
					{/* Top Cities Section */}
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold">Top cities</h2>
						<Link href="/city-to-city/routes" className="text-primary hover:underline">
							See all
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{topCities.map(city => (
							<Link key={city.name} href={`/city-to-city/routes`}>
								<Card className="overflow-hidden">
									<CardContent className="p-0">
										<div className="relative h-48">
											<Image src={city.image} alt={`${city.name} cityscape`} fill className="object-cover" />
										</div>
										<div className="p-4">
											<h3 className="font-semibold text-lg">{city.name}</h3>
											<p className="text-muted-foreground">{city.routeCount} routes to/from this city</p>
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>

					{/* Top Routes Section */}
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold">Top routes</h2>
						<Link href="/city-to-city/routes" className="text-primary hover:underline">
							See all
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{topRoutes.map(route => (
							<Link key={`${route.from}-${route.to}`} href={`/city-to-city/routes`}>
								<Card className="hover:bg-muted/50 transition-colors">
									<CardContent className="p-4">
										<div className="flex items-center gap-2 mb-2">
											<span className="font-medium">{route.from}</span>
											<ArrowRight className="w-4 h-4 text-muted-foreground" />
											<span className="font-medium">{route.to}</span>
										</div>
										<div className="text-sm text-muted-foreground">
											{route.duration} · {route.distance}
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>

					{/* CTA Section */}
					<Card className="mt-8">
						<CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">Have a route in mind?</h3>
								<p className="text-muted-foreground">Enter your pickup and drop-off locations to see the price.</p>
							</div>

							<Link href={'/services/city-city'}>
								<Button size="lg" className="bg-[#E55C3D] hover:bg-[#D54C2D] text-white">
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
