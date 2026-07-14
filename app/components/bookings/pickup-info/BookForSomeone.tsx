'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { DropDown } from '@/components/ui/dropdown';
import { FieldError } from '@/components/ui/field-error';
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
	const { stepperValues } = globalStateController.useState(['stepperForm', 'showValidationErrors'], 'stepperValues');
	const passengerInfo = stepperValues?.stepperForm?.passengerInfo;
	const showErrors = stepperValues?.showValidationErrors;

	return (
		<Card className="border-border/60 pt-6 shadow-soft">
			<CardContent>
				<div className="space-y-2">
					<Label>
						Title <span className="text-red-500">*</span>
					</Label>
					<DropDown
						options={titles}
						searchable={false}
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
						className={cn('bg-surface', showErrors && !passengerInfo?.title && 'border-destructive ring-1 ring-destructive/30')}
					/>
					<FieldError show={showErrors && !passengerInfo?.title} />
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
							aria-invalid={showErrors && !passengerInfo?.firstName}
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
						<FieldError show={showErrors && !passengerInfo?.firstName} />
					</div>
					<div className="space-y-2">
						<Label htmlFor="lastName">
							Last name <span className="text-red-500">*</span>
						</Label>
						<Input
							id="lastName"
							placeholder="Last name"
							className="bg-surface"
							aria-invalid={showErrors && !passengerInfo?.lastName}
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
						<FieldError show={showErrors && !passengerInfo?.lastName} />
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
						aria-invalid={showErrors && !passengerInfo?.email}
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
					<FieldError show={showErrors && !passengerInfo?.email} />
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
							aria-invalid={showErrors && !passengerInfo?.phoneNumber}
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
					<FieldError show={showErrors && !passengerInfo?.phoneNumber} />
					<p className="text-sm text-muted-foreground">
						Please enter the phone number on which the guest would like to receive notifications
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
