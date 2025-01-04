'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
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
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
			<div className="container flex items-center justify-between h-16 px-4">
				<Link href="/" className="text-xl font-bold lg:pl-48">
					TRAVEL TIME LIMO
				</Link>

				{/* Mobile Menu */}
				<div className="lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<div className="flex flex-col gap-4 mt-4">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="w-full justify-start">
											Our services <ChevronDown className="w-4 h-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start" className="w-56">
										{services.map(service => (
											<DropdownMenuItem key={service.name} asChild>
												<Link href={service.href}>{service.name}</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="w-full justify-start">
											For business <ChevronDown className="w-4 h-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start" className="w-56">
										{business.map(item => (
											<DropdownMenuItem key={item.name} asChild>
												<Link href={item.href}>{item.name}</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>

								<Button variant="ghost" className="justify-start" asChild>
									<Link href="#">For chauffeurs</Link>
								</Button>
								<Button variant="ghost" className="justify-start" asChild>
									<Link href="#">Help</Link>
								</Button>

								<hr className="my-2" />

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="justify-start">
											English <ChevronDown className="w-4 h-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>English</DropdownMenuItem>
										<DropdownMenuItem>Español</DropdownMenuItem>
										<DropdownMenuItem>Français</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="justify-start">
											dani <ChevronDown className="w-4 h-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>Profile</DropdownMenuItem>
										<DropdownMenuItem>Settings</DropdownMenuItem>
										<DropdownMenuItem>Logout</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center gap-6">
					<div className="flex items-center gap-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-1">
									Our services <ChevronDown className="w-4 h-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{services.map(service => (
									<DropdownMenuItem key={service.name} asChild>
										<Link href={service.href}>{service.name}</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-1">
									For business <ChevronDown className="w-4 h-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{business.map(item => (
									<DropdownMenuItem key={item.name} asChild>
										<Link href={item.href}>{item.name}</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>

						<Button variant="ghost" asChild>
							<Link href="#">For chauffeurs</Link>
						</Button>
						<Button variant="ghost" asChild>
							<Link href="#">Help</Link>
						</Button>
					</div>

					<div className="flex items-center gap-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-1">
									English <ChevronDown className="w-4 h-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>English</DropdownMenuItem>
								<DropdownMenuItem>Español</DropdownMenuItem>
								<DropdownMenuItem>Français</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-1">
									dani <ChevronDown className="w-4 h-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</nav>
	);
}
