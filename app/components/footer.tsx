import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CircleHelp, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CITY_TO_CITY_ROUTES, FOOTER_NAVIGATIONS, SOCIALS } from '@/lib/constants';

export function Footer() {
	return (
		<footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
			<div className="container mx-auto px-6 py-12">
				{/* Top Section */}
				<div className="flex flex-col lg:flex-row items-center justify-between mb-12 border-b border-gray-700 pb-8">
					<Link href="/" className="text-3xl font-bold text-white mb-4 lg:mb-0">
						TRAVEL TIME LIMO
					</Link>
					<Link
						href="#"
						className="flex items-center gap-x-3 text-sm font-medium text-gray-300 hover:text-white transition-colors"
					>
						<CircleHelp className="w-5 h-5 text-white" />
						Need Help?
					</Link>
				</div>

				{/* Navigation Section */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
					<FooterSection title="Company" items={FOOTER_NAVIGATIONS.company} />
					<FooterSection title="For Business" items={FOOTER_NAVIGATIONS.business} />
					<FooterSection title="Top Cities" items={FOOTER_NAVIGATIONS.cities} />
					<FooterSection title="Explore" items={FOOTER_NAVIGATIONS.explore} />
					<div>
						<h3 className="flex items-center text-sm font-semibold text-white mb-4">
							City-to-City Rides
							<Badge variant="secondary" className="ml-2 bg-yellow-400 text-black">
								NEW
							</Badge>
						</h3>
						<ul className="space-y-3">
							{CITY_TO_CITY_ROUTES[0]?.routes?.slice(0, 6).map(route => (
								<li key={route.id}>
									<Link
										href={`/city-to-city/routes/${route.id}`}
										className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
									>
										<ChevronRight className="w-4 h-4 mr-2" />
										{route.from} - {route.to}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Legal Section */}
				<div className="border-t border-gray-700 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-xs text-gray-400">&copy; 2024 Travel Time Limo GmbH</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							{FOOTER_NAVIGATIONS.legal.map(item => (
								<Link
									key={item.name}
									href={item.href}
									className="text-xs text-gray-400 hover:text-white transition-colors"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterSection({ title, items }) {
	return (
		<div>
			<h3 className="text-base font-semibold text-white mb-4">{title}</h3>
			<ul className="space-y-3">
				{items.map(item => (
					<li key={item.name}>
						<Link
							href={item.href}
							className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
						>
							<ChevronRight className="w-4 h-4 mr-2" />
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
