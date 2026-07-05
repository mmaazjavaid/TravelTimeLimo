'use client';

import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { STYLES } from '@/lib/commonStyles';
import GoMapsAutocomplete from '../common/PlacesAutoComplete';
import { globalStateController } from '@/state/global/globalStateController';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

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
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					routeInfo: FALLBACK_ROUTE_INFO,
				},
			});
		}
	};

	const isValidSlot = () => {
		const now = new Date();
		const selectedDate = bookingInfo.date ? new Date(bookingInfo.date) : now;
		const today = new Date().toISOString().split('T')[0];
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
				toast.error(existingBookings.message, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					className: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white',
				});
				return false;
			}
			return true;
		} catch (error) {
			// If the availability service can't be reached, allow the booking to continue.
			console.error('Error checking booking availability:', error);
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

	const tabTriggerClass = `flex-1 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60 ${STYLES.transition} data-[state=active]:bg-gold-gradient data-[state=active]:text-ink data-[state=active]:shadow-lg`;
	const fieldClass =
		"dark-picker h-12 w-full rounded-lg border-white/15 bg-white/5 pl-10 pr-3 text-sm font-medium text-white shadow-sm focus-visible:border-gold/60 focus-visible:ring-gold/40 mobile-min-width";

	return (
		<Card className="glass-panel w-[92vw] max-w-[400px] overflow-hidden rounded-2xl shadow-2xl">
			<CardContent className="flex flex-col gap-5 p-6">
				<div className="text-center">
					<h2 className="font-display text-2xl font-bold text-white">Reserve your ride</h2>
					<p className="mt-1 text-xs text-white/55">Instant quote • Free cancellation</p>
				</div>
				<Tabs defaultValue="one-way" className="flex-grow">
					<TabsList className="mb-4 flex w-full gap-2 rounded-xl border border-white/10 bg-black/20 p-1">
						<TabsTrigger
							onClick={() => {
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										bookingInfo: {
											...bookingInfo,
											type: "oneWay",
										},
									},
								})
							}}
							value="one-way"
							className={tabTriggerClass}
						>
							One Way
						</TabsTrigger>
						<TabsTrigger
							onClick={() => {
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										bookingInfo: {
											...bookingInfo,
											type: "hourly",
										},
									},
								})
							}}
							value="hourly"
							className={tabTriggerClass}
						>
							Hourly
						</TabsTrigger>
					</TabsList>
					<TabsContent value="one-way" className="flex-grow">
						<div className="flex flex-col gap-3">
							<GoMapsAutocomplete placeholder={"From: Address, airport, hotel..."} distination={"from"} />
							<GoMapsAutocomplete placeholder={"To: Address, airport, hotel..."} distination={"to"} />
							<div className="relative">
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
									onChange={(e) => {
										const selectedTime = e.target.value
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
									}}
								/>
							</div>
							<p className="flex items-center justify-center gap-1.5 text-xs text-gold">
								<Clock className="h-3.5 w-3.5" />
								Chauffeur waits {isAirport ? "60" : "15"} minutes free of charge.
							</p>

							<Button
								onClick={async () => {
									const isAvailable = await isBookingAvailable()
									if (!isValidSlot()) toast.error("Please select a time at least 4 hours from now");

									if (isValidSlot() && isAvailable && bookingInfo.time && bookingInfo.date && bookingInfo.from && bookingInfo.to) {
										router.push("/bookings/service-class")
										getDistanceParameters()
									}
								}}
								variant="gradient"
								className="mt-1 h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide"
							>
								Get my quote
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="hourly" className="flex-grow">
						<div className="flex flex-col gap-3">
							<GoMapsAutocomplete placeholder={"Pickup location"} distination={"from"} />
							<div className="relative">
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
									onChange={(e) => {
										const selectedTime = e.target.value
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
									}}
								/>
							</div>
							<div className="relative">
								<Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
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
							<Button
								onClick={async () => {
									const isAvailable = await isBookingAvailable()
									if (!isValidSlot()) toast.error("Please select a time at least 4 hours from now");

									if (isValidSlot() && isAvailable && bookingInfo.time && bookingInfo.date && bookingInfo.from) {
										router.push("/bookings/service-class")
									}
								}}
								variant="gradient"
								className="mt-1 h-12 w-full rounded-lg text-sm font-semibold uppercase tracking-wide"
							>
								Get my quote
							</Button>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
