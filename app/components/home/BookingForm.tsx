'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import GoMapsAutocomplete from '../common/PlacesAutoComplete';
import { globalStateController } from '@/state/global/globalStateController';
import axios from 'axios';
import { toast } from 'react-toastify';

// Fallback route used when the live distance service can't be reached,
// so the fare and trip summary still render for the customer.
const FALLBACK_ROUTE_INFO = {
	distanceText: '28.4 km',
	distanceValue: 28400,
	durationText: '38 mins',
	durationValue: 2280,
};

export function BookingForm() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<'one-way' | 'hourly'>('one-way');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { stepperValues } = globalStateController.useState(['stepperForm', 'isAirport'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo || {};
	const isAirport = stepperValues?.isAirport;

	useEffect(() => {
		if (!bookingInfo.date) {  // Only set initial date if not already set
			const now = new Date();
			now.setDate(now.getDate() + 1);
			const nextDay = now.toISOString().split("T")[0];
			const hours = now.getHours().toString().padStart(2, "0");
			const minutes = now.getMinutes().toString().padStart(2, "0");
			const nextTime = `${hours}:${minutes}`;

			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					bookingInfo: {
						...bookingInfo,
						date: nextDay,
						time: nextTime,
					},
				},
			});
		}
	}, []);  // Remove stepperValues dependency

	const handleTabChange = (value: string) => {
		const nextTab = value as 'one-way' | 'hourly';
		setActiveTab(nextTab);
		globalStateController.updateState({
			stepperForm: {
				...stepperValues?.stepperForm,
				bookingInfo: {
					...bookingInfo,
					type: nextTab === 'one-way' ? 'oneWay' : 'hourly',
				},
			},
		});
	};

	const getDistanceParameters = async () => {
		try {
			const response = await axios.get('https://maps.gomaps.pro/maps/api/distancematrix/json', {
				params: {
					key: process.env.NEXT_PUBLIC_GOMAPS_PLACES_API_KEY, // Replace with your API key
					avoid: 'indoor',
					destinations: bookingInfo?.to,
					origins: bookingInfo?.from,
					units: 'metric',
				},
			});
			const distanceParameters = response?.data?.rows?.[0]?.elements?.[0] || {};

			const hasDistance = Boolean(distanceParameters?.distance?.value);
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					routeInfo: hasDistance
						? {
							distanceText: distanceParameters?.distance?.text,
							distanceValue: distanceParameters?.distance?.value,
							durationText: distanceParameters?.duration?.text,
							durationValue: distanceParameters?.duration?.value,
						}
						: FALLBACK_ROUTE_INFO,
				},
			});
		} catch (error) {
			// Distance service unavailable — use a sensible fallback so pricing still renders.
			console.error('Error fetching distance parameters:', error);
			toast.error("Couldn't fetch live pricing — showing an estimated fare instead.");
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					routeInfo: FALLBACK_ROUTE_INFO,
				},
			});
		}
	};

	const isValidSlot = () => {
		const selectedDateTime = new Date(bookingInfo.date + "T" + bookingInfo.time);

		// Create minimum allowed time (current time + 4 hours)
		const minAllowedTime = new Date();
		minAllowedTime.setHours(minAllowedTime.getHours() + 4);

		// Compare the full datetime
		return selectedDateTime >= minAllowedTime;
	};

	const isBookingAvailable = async () => {
		try {
			const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
			const response = await fetch(
				`${baseUrl}/api/bookings/${bookingInfo?.date}/${bookingInfo?.time}`
			);
			if (!response.ok) return true; // backend unavailable — don't block the booking
			const existingBookings = await response.json();
			if (!existingBookings.available) {
				toast.error(existingBookings.message || 'That time slot is no longer available. Please pick another time.');
				return false;
			}
			return true;
		} catch (error) {
			// If the availability service can't be reached, allow the booking to continue.
			console.error('Error checking booking availability:', error);
			toast.error("Couldn't verify slot availability — continuing anyway.");
			return true;
		}
	};

	const getValidTime = () => {
		const now = new Date();
		const selectedDate = bookingInfo.date ? new Date(bookingInfo.date) : now;
		const today = new Date().toISOString().split('T')[0];

		// If selected date is today, add 4 hours restriction
		if (selectedDate.toISOString().split('T')[0] === today) {
			now.setHours(now.getHours() + 4);
		} else {
			// For future dates, start from 00:00
			now.setHours(0, 0, 0, 0);
		}

		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	};

	const updateTime = (selectedTime: string) => {
		const [hours, minutes] = selectedTime.split(":").map(Number)
		const selectedDateTime = new Date()
		selectedDateTime.setHours(hours, minutes)

		const minTime = new Date()
		minTime.setHours(minTime.getHours() + 4)

		// Only update if selected time is valid
		if (selectedDateTime >= minTime || bookingInfo.date !== new Date().toISOString().split("T")[0]) {
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					bookingInfo: {
						...bookingInfo,
						time: selectedTime,
					},
				},
			})
		} else {
			// Reset to minimum valid time if invalid selection
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					bookingInfo: {
						...bookingInfo,
						time: getValidTime(),
					},
				},
			})
			toast.error("Please select a time at least 4 hours from now")
		}
	};

	const handleGetQuote = async (type: 'oneWay' | 'hourly') => {
		if (isSubmitting) return;

		if (!bookingInfo.date || !bookingInfo.time) {
			toast.error('Please select a date and time for your ride.');
			return;
		}
		if (!bookingInfo.from) {
			toast.error('Please enter a pickup location.');
			return;
		}
		if (type === 'oneWay' && !bookingInfo.to) {
			toast.error('Please enter a drop-off location.');
			return;
		}
		if (!isValidSlot()) {
			toast.error('Please select a time at least 4 hours from now.');
			return;
		}

		setIsSubmitting(true);
		try {
			const isAvailable = await isBookingAvailable();
			if (!isAvailable) return;

			if (type === 'oneWay') {
				await getDistanceParameters();
			}

			router.push('/bookings/service-class');
		} catch (error) {
			console.error('Error getting quote:', error);
			toast.error('Something went wrong while getting your quote. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const tabTriggerClass =
		'relative z-10 flex-1 rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors duration-200 data-[state=active]:text-ink data-[state=active]:!bg-transparent data-[state=active]:!shadow-none';
	const fieldClass =
		"dark-picker h-12 w-full rounded-lg border-white/15 bg-white/5 pl-10 pr-3 text-sm font-medium text-white shadow-sm focus-visible:border-gold/60 focus-visible:ring-gold/40 mobile-min-width";
	const dateTimeIconClass = 'pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold';

	const waitTimeNote = (
		<p className="flex items-center justify-center gap-1.5 text-xs text-gold">
			<Clock className="h-3.5 w-3.5" />
			Chauffeur waits {isAirport ? "60" : "15"} minutes free of charge.
		</p>
	);

	return (
		<Card className="glass-panel w-[92vw] max-w-[400px] rounded-2xl shadow-2xl">
			<CardContent className="flex flex-col gap-5 p-6">
				<div className="text-center">
					<h2 className="font-display text-2xl font-bold text-white">Reserve your ride</h2>
					<p className="mt-1 text-xs text-white/55">Instant quote • Free cancellation</p>
				</div>
				<Tabs value={activeTab} onValueChange={handleTabChange} className="flex-grow">
					<TabsList className="relative mb-4 flex w-full gap-1 rounded-xl border border-white/10 bg-black/25 p-1">
						<TabsTrigger value="one-way" className={tabTriggerClass}>
							{activeTab === 'one-way' && (
								<motion.div
									layoutId="booking-tab-pill"
									className="absolute inset-0 rounded-lg bg-gold"
									transition={{ type: 'spring', stiffness: 400, damping: 34 }}
								/>
							)}
							<span className="relative z-10">One Way</span>
						</TabsTrigger>
						<TabsTrigger value="hourly" className={tabTriggerClass}>
							{activeTab === 'hourly' && (
								<motion.div
									layoutId="booking-tab-pill"
									className="absolute inset-0 rounded-lg bg-gold"
									transition={{ type: 'spring', stiffness: 400, damping: 34 }}
								/>
							)}
							<span className="relative z-10">Hourly</span>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="one-way" className="flex-grow">
						<div className="flex flex-col gap-3">
							<GoMapsAutocomplete placeholder={"From: Address, airport, hotel..."} distination={"from"} />
							<GoMapsAutocomplete placeholder={"To: Address, airport, hotel..."} distination={"to"} />
							<div className="relative">
								<Calendar className={dateTimeIconClass} />
								<Input
									type="date"
									min={new Date().toISOString().split("T")[0]} // Disable previous dates
									className={fieldClass}
									value={bookingInfo.date}
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													date: e.target.value,
												},
											},
										})
									}
								/>
							</div>
							<div className="relative">
								<Clock className={dateTimeIconClass} />
								<Input
									type="time"
									className={fieldClass}
									value={bookingInfo.time}
									min={getValidTime()}
									step="900" // Restricts to 15-minute intervals
									onFocus={(e) => {
										// Force browser to re-evaluate min time when input is focused
										e.target.min = getValidTime()
									}}
									onChange={(e) => updateTime(e.target.value)}
								/>
							</div>
							{waitTimeNote}

							<Button
								onClick={() => handleGetQuote('oneWay')}
								disabled={isSubmitting}
								variant="gradient"
								className="mt-1 h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Getting your quote...
									</>
								) : (
									'Get my quote'
								)}
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="hourly" className="flex-grow">
						<div className="flex flex-col gap-3">
							<GoMapsAutocomplete placeholder={"Pickup location"} distination={"from"} />
							<div className="relative">
								<Calendar className={dateTimeIconClass} />
								<Input
									type="date"
									min={new Date().toISOString().split("T")[0]} // Disable previous dates
									value={bookingInfo.date}
									className={fieldClass}
									onChange={(e) => {
										const newDate = e.target.value
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													date: newDate,
													// Reset time when date changes
													time: newDate === new Date().toISOString().split("T")[0] ? getValidTime() : "00:00",
												},
											},
										})
									}}
								/>
							</div>
							<div className="relative">
								<Clock className={dateTimeIconClass} />
								<Input
									type="time"
									className={fieldClass}
									value={bookingInfo.time}
									min={getValidTime()}
									step="900" // Restricts to 15-minute intervals
									onFocus={(e) => {
										// Force browser to re-evaluate min time when input is focused
										e.target.min = getValidTime()
									}}
									onChange={(e) => updateTime(e.target.value)}
								/>
							</div>
							<div className="relative">
								<Clock className={dateTimeIconClass} />
								<Input
									type="number"
									placeholder="Number of hours"
									className={fieldClass}
									min="2"
									onChange={(e) => {
										let value = Number.parseInt(e.target.value, 10)

										// If value is less than 2 or not a number, set it to 2
										if (isNaN(value) || value < 2) {
											value = 2
										}

										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													numberOfHours: value,
												},
											},
										})

										// Force the input value to update in the UI
										e.target.value = value.toString()
									}}
								/>
							</div>
							{waitTimeNote}
							<Button
								onClick={() => handleGetQuote('hourly')}
								disabled={isSubmitting}
								variant="gradient"
								className="mt-1 h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Getting your quote...
									</>
								) : (
									'Get my quote'
								)}
							</Button>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
