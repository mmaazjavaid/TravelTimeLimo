'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const services = [
	{ name: 'City-to-city rides', href: '/services/city-city' },
	{ name: 'Airport transfer', href: '/services/airport-transfer' },
	{ name: 'Limousine service', href: '/services/limousine-service' },
	{ name: 'Chauffeur service', href: '/services/chauffeur-service' },
	{ name: 'Chauffeur hailing', href: '/services/chauffeur-hailing' },
	{ name: 'Hourly car service', href: '/services/hourly-car-service' },
];

const business = [
	{ name: 'For Companies', href: '#' },
	{ name: 'For Events', href: '#' },
	{ name: 'Corporate Accounts', href: '#' },
];

export function Navbar() {
	const [title, setTitle] = React.useState("TRAVEL TIME LIMO");

	React.useEffect(() => {
		const fetchLocation = async () => {
			try {
				const res = await fetch("https://ipinfo.io/json?token=5de9c3725adbab");
				const data = await res.json();
				const city = data.city;

				if (city === "Austin") {
					setTitle("ATX Airport limo");
				}

				if (city === 'New York' || city == 'Newyork') {
					setTitle('NY ICON LIMO');
				}
			} catch (error) {
				console.error("Error fetching location:", error);
			}
		};

		fetchLocation();
	}, []);
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<Link href="/" className="text-2xl font-bold text-gold whitespace-nowrap mr-3">
						{title}
					</Link>

					<Button
						variant="ghost"
						onClick={() => window.location.href = '/services/city-city'}
						className="bg-[#52c134] hover:bg-[#47ab2d] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
					>
						Book Now
					</Button>

					{/* Mobile Menu */}
					<div className="lg:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80 bg-gray-900 text-white p-6">
								<div className="flex flex-col gap-6 mt-6">
									<MobileDropdown title="Our services" items={services} />
									<MobileLink href="/services/city-city">City-to-city rides</MobileLink>
									<MobileLink href="/services/airport-transfer">Airport transfer</MobileLink>
									<MobileLink href="/services/hourly-car-service">Hourly car service</MobileLink>
									<hr className="border-gray-700 my-4" />
									<MobileDropdown
										title="English"
										items={[]}
										icon={<Globe className="w-4 h-4 mr-2" />}
										showDownIcon={false}
									/>
									<MobileDropdown
										title=""
										items={[]}
										icon={<User className="w-4 h-4 mr-2" />}
										showDownIcon={false}
									/>
								</div>
							</SheetContent>
						</Sheet>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex items-center gap-8">
						<DesktopDropdown title="Our services" items={services} />
						<DesktopLink href="/services/city-city">City-to-city rides</DesktopLink>
						<DesktopLink href="/services/airport-transfer">Airport transfer</DesktopLink>
						<DesktopLink href="/services/hourly-car-service">Hourly car service</DesktopLink>
					</div>

					<div className="hidden lg:flex items-center gap-4">
						<DesktopDropdown
							title="English"
							items={[]}
							icon={<Globe className="w-4 h-4 mr-2" />}
							showDownIcon={false}
						/>
						<DesktopDropdown
							title=""
							items={[]}
							icon={<User className="w-4 h-4 mr-2" />}
							showDownIcon={false}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

function MobileDropdown({
	title,
	items,
	icon,
	showDownIcon = true
}: {
	title: string;
	items: { name: string; href?: string }[];
	icon?: React.ReactNode;
	showDownIcon?: boolean;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="w-full justify-start text-white ">
					{icon}
					{title}{showDownIcon ? <ChevronDown className="w-4 h-4 ml-2" /> : null}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 bg-gray-800 text-white border-gray-700">
				{items.map(item => (
					<DropdownMenuItem key={item.name} asChild className="hover:bg-gray-700">
						<Link href={item.href || '#'} className="w-full px-4 py-2">
							{item.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link href={href} className="text-white  transition-colors duration-200">
			{children}
		</Link>
	);
}

function DesktopDropdown({
	title,
	items,
	icon,
	showDownIcon = true
}: {
	title: string;
	items: { name: string; href?: string }[];
	icon?: React.ReactNode;
	showDownIcon?: boolean
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="text-white ">
					{icon}
					{title} {showDownIcon ? <ChevronDown className="w-4 h-4 ml-1" /> : null}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-gray-800 text-white border-gray-700">
				{items.map(item => (
					<DropdownMenuItem key={item.name} asChild className="hover:bg-gray-700">
						<Link href={item.href || '#'} className="w-full px-4 py-2">
							{item.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function DesktopLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link href={href} className="text-white transition-colors duration-200">
			{children}
		</Link>
	);
}
