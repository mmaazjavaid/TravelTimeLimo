'use client';

import { Clock, MapPin } from 'lucide-react';
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

			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					routeInfo: {
						distanceText: distanceParameters?.distance?.text,
						distanceValue: distanceParameters?.distance?.value,
						durationText: distanceParameters?.duration?.text,
						durationValue: distanceParameters?.duration?.value,
					},
				},
			});
		} catch (error) {
			console.error('Error fetching distance parameters:', error);
		}
	};

	const isBookingAvailable = async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_SITE_URL}/api/bookings/${bookingInfo?.date}/${bookingInfo?.time}`
			);
			const existingBookings = await response.json();
			if (!existingBookings.isAvailable) {
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
			console.error('Error checking booking availability:', error);
			toast.error('Failed to check booking availability');
			return false;
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

	return (
		<Card className="w-[350px] aspect-square mx-auto bg-gradient-to-r from-gray-50 to-gray-100 shadow-2xl rounded-xl overflow-hidden">
			<CardContent className="p-4 flex flex-col h-full">
				<h2 className="text-xl font-bold text-gray-800 mb-2 text-center" style={{ color: '#52c134' }}>Book Your Ride</h2>
				<Tabs defaultValue="one-way" className="flex-grow">
					<TabsList className="flex justify-center gap-2 mb-2">
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
							className={`px-4 py-1 text-xs font-bold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-[#52c134] hover:bg-[#52c134] data-[state=active]:text-white data-[state=active]:shadow-lg`}
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
							className={`px-4 py-1 text-xs font-bold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-[#52c134] hover:bg-[#52c134] data-[state=active]:text-white data-[state=active]:shadow-lg`}
						>
							Hourly
						</TabsTrigger>
					</TabsList>
					<TabsContent value="one-way" className="space-y-3 flex-grow">
						<div className="space-y-3 flex flex-col h-full">
							<div className="relative">
								<MapPin className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
								<GoMapsAutocomplete placeholder={"From: Address, airport, hotel..."} distination={"from"} />
							</div>
							<div className="relative">
								<MapPin className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
								<GoMapsAutocomplete placeholder={"To: Address, airport, hotel..."} distination={"to"} />
							</div>
							<div className="relative">
								<Input
									style={{
										width: "100%",
									}}
									type="date"
									min={new Date().toISOString().split("T")[0]} // Disable previous dates
									className="h-8 pl-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold text-sm"
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
									style={{
										width: "100%",
									}}
									type="time"
									className="h-8 pl-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold text-sm"
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
							<p className="text-xs font-bold text-red-400 text-center">
								Chauffeur will wait {isAirport ? "60" : "15"} minutes free of charge.
							</p>

							<Button
								onClick={() => {
									const isAvailable = isBookingAvailable()

									if (isAvailable && bookingInfo.time && bookingInfo.date && bookingInfo.from && bookingInfo.to) {
										router.push("/bookings/service-class")
										getDistanceParameters()
									}
								}}
								className={`w-full font-bold py-2 rounded-lg text-sm bg-[#3B82F6] hover:bg-[#2563eb] text-white transition-colors duration-200`}
								style={{ background: '#52c134' }}
							>
								Search
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="hourly" className="space-y-3 flex-grow">
						<div className="space-y-3 flex flex-col h-full">
							<div className="relative">
								<MapPin className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
								<GoMapsAutocomplete placeholder={"Pickup location"} distination={"from"} />
							</div>
							<div className="relative">
								<Input
									style={{
										width: "100%",
									}}
									type="date"
									min={new Date().toISOString().split("T")[0]} // Disable previous dates
									value={bookingInfo.date}
									className="h-8 pl-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold text-sm"
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
									style={{
										width: "100%",
									}}
									type="time"
									className="h-8 pl-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold text-sm"
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
								<Clock className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
								<Input
									type="number"
									placeholder="Number of hours"
									className="w-full pl-12 h-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 font-bold"
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
								onClick={() => {
									const isAvailable = isBookingAvailable()
									if (isAvailable && bookingInfo.time && bookingInfo.date && bookingInfo.from) {
										router.push("/bookings/service-class")
									}
								}}

								// For search buttons
								className={`w-full font-bold py-2 rounded-lg text-sm bg-[#3B82F6] hover:bg-[#2563eb] text-white transition-colors duration-200`}
								style={{ background: '#52c134' }}
							>
								Search
							</Button>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
