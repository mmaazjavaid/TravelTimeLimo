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
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;
	const isAirport = stepperValues?.isAirport;
	useEffect(() => {
		const now = new Date();

		// Set date to next day
		now.setDate(now.getDate() + 1);
		const nextDay = now.toISOString().split("T")[0];

		// Set time to current time + 24 hours
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		const nextTime = `${hours}:${minutes}`;

		globalStateController.updateState({
			stepperForm: {
				...stepperValues?.stepperForm,
				bookingInfo: {
					date: nextDay,
					time: nextTime,
				},
			},
		});
	}, []);

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
					className: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white', // Gradient background
				});
			} else return true;
		} catch (error) {
			console.error('Error fetching distance parameters:', error);
		}
	};

	const getValidTime = () => {
		const now = new Date();
		now.setHours(now.getHours() + 4); // Add 4 hours to disable selection before this
		const hours = now.getHours().toString().padStart(2, "0");
		const minutes = now.getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	};

	return (
		<Card className="w-[350px] mx-auto bg-gradient-to-r from-gray-50 to-gray-100 shadow-2xl rounded-xl overflow-hidden ">
			<CardContent className="p-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Ride</h2>
				<Tabs defaultValue="one-way" className="w-full">
					<TabsList className="flex justify-center gap-4 mb-8">
						<TabsTrigger
							onClick={() => {
								globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										bookingInfo: {
											...bookingInfo,
											type: 'oneWay',
										},
									},
								});
							}}
							value="one-way"
							className={`px-6 py-3 text-sm font-bold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-400 data-[state=active]:via-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg`}
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
											type: 'hourly',
										},
									},
								});
							}}
							value="hourly"
							className={`px-6 py-3 text-sm font-bold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-400 data-[state=active]:via-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg`}
						>
							Hourly
						</TabsTrigger>
					</TabsList>
					<TabsContent value="one-way" className="space-y-6">
						<div className="space-y-6">
							<div className="relative">
								<MapPin className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<GoMapsAutocomplete placeholder={'From: Address, airport, hotel...'} distination={'from'} />
							</div>
							<div className="relative">
								<MapPin className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<GoMapsAutocomplete placeholder={'To: Address, airport, hotel...'} distination={'to'} />
							</div>
							<div className="relative">
								<Input
									style={{
										width: '100%',
									}}
									type="date"
									min={new Date().toISOString().split('T')[0]} // Disable previous dates
									className="h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold"
									value={bookingInfo.date}
									onChange={e =>
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
										width: '100%',
									}}
									type="time"
									className="h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold"
									value={bookingInfo.time}
									min={getValidTime()}
									onChange={e =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													time: e.target.value,
												},
											},
										})
									}
								/>
							</div>
							<p className="text-sm font-bold text-red-400 text-center">
								Chauffeur will wait {isAirport ? '60' : '15'} minutes free of charge.
							</p>

							<Button
								onClick={() => {
									const isAvailable = isBookingAvailable();

									if (isAvailable
										&& bookingInfo.time
										&& bookingInfo.date
										&& bookingInfo.from
										&& bookingInfo.to
									) {
										router.push('/bookings/service-class');
										getDistanceParameters();
									}
								}}
								className={`w-full text-white font-bold py-3 rounded-lg text-base sm:text-lg md:text-xl`}
								variant="gradient"
							>
								Search
							</Button>
						</div>
					</TabsContent>
					<TabsContent value="hourly" className="space-y-6">
						<div className="space-y-6">
							<div className="relative">
								<MapPin className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<GoMapsAutocomplete placeholder={'Pickup location'} distination={'from'} />
							</div>
							<div className="relative">
								<Input
									style={{
										width: '100%',
									}}
									type="date"
									min={new Date().toISOString().split('T')[0]} // Disable previous dates
									value={bookingInfo.date}
									className="h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold"
									onChange={e =>
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
										width: '100%',
									}}
									type="time"
									value={bookingInfo.time}
									min={getValidTime()}
									className="h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 mobile-min-width font-bold"
									onChange={e =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													time: e.target.value,
												},
											},
										})
									}
								/>
							</div>
							<div className="relative">
								<Clock className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="number"
									placeholder="Number of hours"
									className="w-full pl-12 h-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400 font-bold"
									min="2"
									onChange={e => {
										let value = parseInt(e.target.value, 10);

										// If value is less than 2 or not a number, set it to 2
										if (isNaN(value) || value < 2) {
											value = 2;
										}

										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												bookingInfo: {
													...bookingInfo,
													numberOfHours: value,
												},
											},
										});

										// Force the input value to update in the UI
										e.target.value = value;
									}}
								/>
							</div>
							<Button
								onClick={() => {
									const isAvailable = isBookingAvailable();
									if (isAvailable
										&& bookingInfo.time
										&& bookingInfo.date
										&& bookingInfo.from
									) {
										router.push('/bookings/service-class');
									}
								}}
								className={`w-full text-white font-bold py-3 rounded-lg text-base sm:text-lg md:text-xl`}
								variant="gradient"
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
