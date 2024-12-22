'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { DropDown } from '@/components/ui/dropdown';

const titles = [
	{ value: 'mr', label: 'Mr.' },
	{ value: 'ms', label: 'Ms.' },
	{ value: 'mx', label: 'Mx.' },
];

const countries = [
	{ code: 'US', dial: '+1', flag: '🇺🇸' },
	{ code: 'IT', dial: '+39', flag: '🇮🇹' },
	{ code: 'GB', dial: '+44', flag: '🇬🇧' },
	{ code: 'DE', dial: '+49', flag: '🇩🇪' },
];

export function BookForSomeoneForm() {
	const [title, setTitle] = React.useState('');
	const [country, setCountry] = React.useState(countries[0]);

	return (
		<Card className="pt-6">
			<CardContent>
				<div className="space-y-2">
					<Label>
						Title <span className="text-red-500">*</span>
					</Label>
					<DropDown
						options={titles}
						value={title}
						onChange={setTitle}
						placeholder="Select title"
						className="bg-gray-50"
					/>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 mt-2">
					<div className="space-y-2">
						<Label htmlFor="firstName">
							First name <span className="text-red-500">*</span>
						</Label>
						<Input id="firstName" placeholder="First name" className="bg-gray-50" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="lastName">
							Last name <span className="text-red-500">*</span>
						</Label>
						<Input id="lastName" placeholder="Last name" className="bg-gray-50" />
					</div>
				</div>

				<div className="space-y-2 mt-2">
					<Label htmlFor="email">
						Email <span className="text-red-500">*</span>
					</Label>
					<Input id="email" type="email" placeholder="Email" className="bg-gray-50" />
				</div>

				<div className="space-y-2 mt-2">
					<Label htmlFor="phone">
						Phone number <span className="text-red-500">*</span>
					</Label>
					<div className="flex">
						<div className="relative">
							<select
								className={cn(
									'h-9 rounded-l-md border border-r-0 bg-gray-50 px-3 py-1 text-sm',
									'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
								)}
								value={country.code}
								onChange={e => {
									const selected = countries.find(c => c.code === e.target.value);
									if (selected) setCountry(selected);
								}}
							>
								{countries.map(c => (
									<option key={c.code} value={c.code}>
										{c.flag} {c.dial}
									</option>
								))}
							</select>
						</div>
						<Input id="phone" type="tel" className="rounded-l-none bg-gray-50" placeholder="Phone number" />
					</div>
					<p className="text-sm text-muted-foreground">
						Please enter the phone number on which the guest would like to receive notifications
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
