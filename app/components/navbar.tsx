'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const services = [
	{ name: 'City-to-city rides', href: '/services/city-city' },
	{ name: 'Airport transfer', href: '/services/airport-transfer' },
	{ name: 'Limousine service', href: '/services/limousine-service' },
	{ name: 'Chauffeur service', href: '/services/chauffeur-service' },
	{ name: 'Chauffeur hailing', href: '/services/chauffeur-hailing' },
	{ name: 'Hourly car service', href: '/services/hourly-car-service' },
];

const navLinks = [
	{ name: 'City-to-city rides', href: '/services/city-city' },
	{ name: 'Airport transfer', href: '/services/airport-transfer' },
	{ name: 'Hourly car service', href: '/services/hourly-car-service' },
];

export function Navbar() {
	const pathname = usePathname();
	const [title, setTitle] = React.useState('TRAVEL TIME LIMO');
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const fetchLocation = async () => {
			try {
				const res = await fetch('https://ipinfo.io/json?token=5de9c3725adbab');
				const data = await res.json();
				const city = data.city;

				if (city === 'Austin') {
					setTitle('ATX Airport limo');
				}

				if (city === 'New York' || city == 'Newyork') {
					setTitle('NY ICON LIMO');
				}
			} catch (error) {
				console.error('Error fetching location:', error);
			}
		};

		fetchLocation();
	}, []);

	React.useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const brandFirst = title.split(' ')[0];
	const brandRest = title.split(' ').slice(1).join(' ');

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
				scrolled
					? 'border-white/10 glass-nav shadow-soft'
					: 'border-transparent bg-ink/90 backdrop-blur-md'
			)}
		>
			<div className="section-container px-4 lg:px-8">
				<div className="flex h-[4.5rem] items-center justify-between gap-4">
					<Link href="/" className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap">
						<span className="font-display text-xl font-bold tracking-wide text-white transition-colors group-hover:text-gold-light sm:text-2xl">
							{brandFirst}
						</span>
						<span className="font-display text-xl font-bold tracking-wide text-gold sm:text-2xl">{brandRest}</span>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
						<DesktopDropdown title="Our services" items={services} />
						{navLinks.map(link => (
							<DesktopLink key={link.href} href={link.href} active={pathname === link.href}>
								{link.name}
							</DesktopLink>
						))}
					</nav>

					<div className="flex items-center gap-2">
						<div className="hidden items-center gap-1 lg:flex">
							<DesktopDropdown title="English" items={[]} icon={<Globe className="h-4 w-4" />} showDownIcon={false} />
							<DesktopDropdown title="" items={[]} icon={<User className="h-4 w-4" />} showDownIcon={false} />
						</div>

						<Button
							variant="gradient"
							size="sm"
							onClick={() => (window.location.href = '/services/city-city')}
							className="hidden sm:inline-flex"
						>
							Book Now
						</Button>

						{/* Mobile menu */}
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon" className="text-white hover:bg-white/10 lg:hidden" aria-label="Open menu">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-full max-w-sm border-white/10 bg-ink text-white">
								<SheetHeader>
									<SheetTitle className="text-left font-display text-xl text-white">
										<span className="text-white">{brandFirst}</span>{' '}
										<span className="text-gold">{brandRest}</span>
									</SheetTitle>
								</SheetHeader>
								<nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
									<MobileDropdown title="Our services" items={services} />
									{navLinks.map(link => (
										<MobileLink key={link.href} href={link.href} active={pathname === link.href}>
											{link.name}
										</MobileLink>
									))}
									<hr className="my-4 border-white/10" />
									<MobileDropdown title="English" items={[]} icon={<Globe className="h-4 w-4" />} showDownIcon={false} />
									<Button
										variant="gradient"
										className="mt-4 w-full"
										onClick={() => (window.location.href = '/services/city-city')}
									>
										Book Now
									</Button>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}

function MobileDropdown({
	title,
	items,
	icon,
	showDownIcon = true,
}: {
	title: string;
	items: { name: string; href?: string }[];
	icon?: React.ReactNode;
	showDownIcon?: boolean;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-11 w-full justify-start text-white/90 hover:bg-white/10 hover:text-white">
					{icon}
					{title}
					{showDownIcon ? <ChevronDown className="ml-auto h-4 w-4" /> : null}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 border-white/10 bg-ink-soft text-white">
				{items.map(item => (
					<DropdownMenuItem key={item.name} asChild className="focus:bg-white/10 focus:text-white">
						<Link href={item.href || '#'} className="w-full px-2 py-2">
							{item.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function MobileLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
	return (
		<Link
			href={href}
			className={cn(
				'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
				active ? 'bg-white/10 text-gold' : 'text-white/85 hover:bg-white/5 hover:text-white'
			)}
		>
			{children}
		</Link>
	);
}

function DesktopDropdown({
	title,
	items,
	icon,
	showDownIcon = true,
}: {
	title: string;
	items: { name: string; href?: string }[];
	icon?: React.ReactNode;
	showDownIcon?: boolean;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="text-sm text-white/85 hover:bg-white/10 hover:text-white">
					{icon}
					{title}
					{showDownIcon ? <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-70" /> : null}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="min-w-[220px] border-white/10 bg-ink-soft text-white shadow-lift">
				{items.map(item => (
					<DropdownMenuItem key={item.name} asChild className="focus:bg-white/10 focus:text-gold">
						<Link href={item.href || '#'} className="w-full cursor-pointer px-2 py-2">
							{item.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function DesktopLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
	return (
		<Link
			href={href}
			className={cn(
				'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
				active ? 'text-gold' : 'text-white/80 hover:bg-white/5 hover:text-white'
			)}
		>
			{children}
		</Link>
	);
}
