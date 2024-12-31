import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CircleHelp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CITY_TO_CITY_ROUTES, FOOTER_NAVIGATIONS, SOCIALS } from '@/lib/constants';

export function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="mx-auto max-w-7xl p-6 pb-8">
				<div className="flex items-center justify-between">
					<Link href="/" className="text-xl font-bold">
						TRAVEL TIME LIMO
					</Link>
					<Link href="#" className="flex items-center gap-x-1 text-sm hover:text-gray-300">
						<CircleHelp fill="#fff" color="#000" className="w-4 h-4" />
						<span>Help</span>
					</Link>
				</div>

				<div className="mt-5 mb-5 border-t border-white/10" />
				<div className="flex space-x-4">
					<Link href="#">
						<Image
							src="/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
							alt="Download on the App Store"
							width={120}
							height={40}
							className="h-10 w-auto"
						/>
					</Link>
					<Link href="#">
						<Image
							src="/png-clipart-google-play-text-google-play-android-app-store-google-play-text-logo.png"
							alt="Get it on Google Play"
							width={135}
							height={40}
							className="h-10 w-auto"
						/>
					</Link>
				</div>
				<div className="mt-5 mb-5 border-t border-white/10" />

				<div className="grid grid-cols-2 gap-8 xl:grid-cols-5">
					<div>
						<h3 className="text-sm font-semibold">Company</h3>
						<ul role="list" className="mt-6 space-y-4">
							{FOOTER_NAVIGATIONS.company.map(item => (
								<li key={item.name}>
									<Link href={item.href} className="text-sm hover:text-gray-300">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold">Travel Time Limo for Business</h3>
						<ul role="list" className="mt-6 space-y-4">
							{FOOTER_NAVIGATIONS.business.map(item => (
								<li key={item.name}>
									<Link href={item.href} className="text-sm hover:text-gray-300">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold">Top cities</h3>
						<ul role="list" className="mt-6 space-y-4">
							{FOOTER_NAVIGATIONS.cities.map(item => (
								<li key={item.name}>
									<Link href={'/city-to-city/routes'} className="text-sm hover:text-gray-300">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold">Explore</h3>
						<ul role="list" className="mt-6 space-y-4">
							{FOOTER_NAVIGATIONS.explore.map(item => (
								<li key={item.name}>
									<Link href={item.href} className="text-sm hover:text-gray-300">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="flex items-center text-sm font-semibold">
							City-to-City rides
							<Badge variant="secondary" className="ml-2">
								NEW
							</Badge>
						</h3>
						<ul role="list" className="mt-6 space-y-4">
							{CITY_TO_CITY_ROUTES[0]?.routes?.slice(0, 6).map(route => (
								<li key={route.id}>
									<Link href={`/city-to-city/routes/${route.id}`} className="text-sm hover:text-gray-300">
										{route.from} - {route.to}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-5 mb-5 border-t border-white/10" />

				<div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
					<div className="flex space-x-6">
						<p className="text-xs">© 2024 Travel Time Limo GmbH</p>
						{FOOTER_NAVIGATIONS.legal.map((item, i) => (
							<React.Fragment key={item.name}>
								<Link href={item.href} className="text-xs hover:text-gray-300">
									{item.name}
								</Link>
							</React.Fragment>
						))}
					</div>
					<div className="flex space-x-6">
						{SOCIALS.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className="hover:text-gray-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon className="h-5 w-5" aria-hidden="true" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
