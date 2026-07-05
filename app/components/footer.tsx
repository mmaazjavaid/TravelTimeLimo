import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CircleHelp, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CITY_TO_CITY_ROUTES, FOOTER_NAVIGATIONS, SOCIALS } from '@/lib/constants';

export function Footer() {
	return (
		<footer className="bg-ink text-white">
			<div className="container mx-auto px-6 py-12">
				{/* Top Section */}
				<div className="mb-12 flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-8 lg:flex-row">
					<Link href="/" className="font-display text-3xl font-bold">
						<span className="text-white">TRAVEL TIME </span>
						<span className="text-gold">LIMO</span>
					</Link>
					<p className="text-sm text-white/60">Premium chauffeur service, available 24/7.</p>
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
							<Badge variant="secondary" className="ml-2 bg-gold text-ink">
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
						<p className="text-xs text-gray-400">&copy; 2024 Travel Time Limo</p>
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
