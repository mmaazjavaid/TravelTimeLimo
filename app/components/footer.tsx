import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CITY_TO_CITY_ROUTES, FOOTER_NAVIGATIONS } from '@/lib/constants';

export function Footer() {
	return (
		<footer className="bg-ink text-white">
			<div className="section-container section-padding pb-10 pt-16">
				{/* Top Section */}
				<div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
					<Link href="/" className="group font-display text-2xl font-bold sm:text-3xl">
						<span className="text-white transition-colors group-hover:text-white/90">TRAVEL TIME </span>
						<span className="text-gold transition-colors group-hover:text-gold-light">LIMO</span>
					</Link>
					<p className="max-w-sm text-sm leading-relaxed text-white/60">
						Premium chauffeur service, available 24/7 across the United States.
					</p>
				</div>

				{/* Navigation Section */}
				<div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
					<FooterSection title="Company" items={FOOTER_NAVIGATIONS.company} />
					<FooterSection title="For Business" items={FOOTER_NAVIGATIONS.business} />
					<FooterSection title="Top Cities" items={FOOTER_NAVIGATIONS.cities} />
					<FooterSection title="Explore" items={FOOTER_NAVIGATIONS.explore} />
					<div>
						<h3 className="mb-4 flex items-center text-sm font-semibold text-white">
							City-to-City Rides
							<Badge variant="gold" className="ml-2">
								NEW
							</Badge>
						</h3>
						<ul className="space-y-2.5">
							{CITY_TO_CITY_ROUTES[0]?.routes?.slice(0, 6).map(route => (
								<li key={route.id}>
									<Link
										href={`/city-to-city/routes/${route.id}`}
										className="group flex items-center text-sm text-white/50 transition-colors hover:text-gold"
									>
										<ChevronRight className="mr-1.5 h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
										{route.from} – {route.to}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Legal Section */}
				<div className="border-t border-white/10 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Travel Time Limo</p>
						<div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
							{FOOTER_NAVIGATIONS.legal.map(item => (
								<Link
									key={item.name}
									href={item.href}
									className="text-xs text-white/40 transition-colors hover:text-white/80"
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

function FooterSection({ title, items }: { title: string; items: { name: string; href: string }[] }) {
	return (
		<div>
			<h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
			<ul className="space-y-2.5">
				{items.map(item => (
					<li key={item.name}>
						<Link
							href={item.href}
							className="group flex items-center text-sm text-white/50 transition-colors hover:text-white"
						>
							<ChevronRight className="mr-1.5 h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
