'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { DropDown } from '@/components/ui/dropdown';
import { globalStateController } from '@/state/global/globalStateController';

const titles = [
	{ value: 'Mr.', label: 'Mr.' },
	{ value: 'Ms.', label: 'Ms.' },
	{ value: 'MX.', label: 'Mx.' },
];

const countries = [
	{ code: 'US', dial: '+1', flag: '🇺🇸' },
	{ code: 'IT', dial: '+39', flag: '🇮🇹' },
	{ code: 'GB', dial: '+44', flag: '🇬🇧' },
	{ code: 'DE', dial: '+49', flag: '🇩🇪' },
];

export function BookForSomeoneForm() {
	const [country, setCountry] = React.useState(countries[0]);
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const passengerInfo = stepperValues?.stepperForm?.passengerInfo;

	return (
		<Card className="border-border/60 pt-6 shadow-soft">
			<CardContent>
				<div className="space-y-2">
					<Label>
						Title <span className="text-red-500">*</span>
					</Label>
					<DropDown
						options={titles}
						value={passengerInfo?.title}
						onChange={value =>
							globalStateController.updateState({
								stepperForm: {
									...stepperValues?.stepperForm,
									passengerInfo: {
										...passengerInfo,
										title: value,
									},
								},
							})
						}
						placeholder="Select title"
						className="bg-surface"
					/>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 mt-2">
					<div className="space-y-2">
						<Label htmlFor="firstName">
							First name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="firstName"
							placeholder="First name"
							className="bg-surface"
							value={passengerInfo?.firstName}
							onChange={e =>
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										passengerInfo: {
											...passengerInfo,
											firstName: e.target.value,
										},
									},
								})
							}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="lastName">
							Last name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="lastName"
							placeholder="Last name"
							className="bg-surface"
							value={passengerInfo?.lastName}
							onChange={e =>
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										passengerInfo: {
											...passengerInfo,
											lastName: e.target.value,
										},
									},
								})
							}
						/>
					</div>
				</div>

				<div className="space-y-2 mt-2">
					<Label htmlFor="email">
						Email <span className="text-red-500">*</span>
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="Email"
						className="bg-surface"
						value={passengerInfo?.email}
						onChange={e =>
							globalStateController.updateState({
								stepperForm: {
									...stepperValues?.stepperForm,
									passengerInfo: {
										...passengerInfo,
										email: e.target.value,
									},
								},
							})
						}
					/>
				</div>

				<div className="space-y-2 mt-2">
					<Label htmlFor="phone">
						Phone number <span className="text-red-500">*</span>
					</Label>
					<div className="flex">
						<div className="relative">
							<select
								className={cn(
									'h-11 rounded-l-lg border border-r-0 bg-surface px-3 py-1 text-sm',
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
						<Input
							id="phone"
							type="tel"
							className="rounded-l-none bg-surface"
							placeholder="Phone number"
							value={passengerInfo?.phoneNumber}
							onChange={e =>
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										passengerInfo: {
											...passengerInfo,
											phoneNumber: e.target.value,
										},
									},
								})
							}
						/>
					</div>
					<p className="text-sm text-muted-foreground">
						Please enter the phone number on which the guest would like to receive notifications
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
