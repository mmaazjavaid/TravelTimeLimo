'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { STYLES } from '@/lib/commonStyles';
import Autocomplete from 'react-google-autocomplete';

export function BookingForm() {
	const router = useRouter();
	const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

	return (
		<Card className="w-full max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 shadow-2xl rounded-xl overflow-hidden">
			<CardContent className="p-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Ride</h2>
				<Tabs defaultValue="one-way" className="w-full">
					<TabsList className="flex justify-center gap-4 mb-8">
						<TabsTrigger
							value="one-way"
							className={`px-6 py-3 text-sm font-semibold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-400 data-[state=active]:via-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg`}
						>
							One Way
						</TabsTrigger>
						<TabsTrigger
							value="hourly"
							className={`px-6 py-3 text-sm font-semibold uppercase rounded-full border ${STYLES.transition} data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-400 data-[state=active]:via-gray-500 data-[state=active]:to-gray-600 data-[state=active]:text-white data-[state=active]:shadow-lg`}
						>
							Hourly
						</TabsTrigger>
					</TabsList>
					<TabsContent value="one-way" className="space-y-6">
						<div className="space-y-6">
							<div className="relative">
								<MapPin className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Autocomplete
									apiKey={googleApiKey}
									onPlaceSelected={place => {
										console.log('Selected place:', place);
									}}
									types={['address']}
									options={{
										componentRestrictions: { country: 'us' },
										region: 'new-york',
									}}
									placeholder="From: Address, airport, hotel..."
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<MapPin className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Autocomplete
									apiKey={googleApiKey}
									onPlaceSelected={place => {
										console.log('Selected place:', place);
									}}
									types={['address']}
									options={{
										componentRestrictions: { country: 'us' },
										region: 'new-york',
									}}
									placeholder="To: Address, airport, hotel..."
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<Calendar className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="date"
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<Clock className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="time"
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<p className="text-sm text-gray-500 text-center">Chauffeur will wait 15 minutes free of charge.</p>
							<Button
								onClick={() => {
									router.push('/bookings/service-class');
								}}
								className={`w-full text-white font-semibold py-3 rounded-lg text-base sm:text-lg md:text-xl`}
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
								<Autocomplete
									apiKey={googleApiKey}
									onPlaceSelected={place => {
										console.log('Selected place:', place);
									}}
									types={['address']}
									options={{
										componentRestrictions: { country: 'us' },
										region: 'new-york',
									}}
									placeholder="Pickup location"
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<Calendar className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="date"
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<Clock className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="time"
									className="w-full h-10 pl-12 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<div className="relative">
								<Clock className="absolute left-4 top-2 h-5 w-5 text-gray-400" />
								<Input
									type="number"
									placeholder="Number of hours"
									className="w-full pl-12 h-10 bg-white border border-gray-300 rounded-lg shadow focus:border-indigo-500 focus:ring-indigo-500"
								/>
							</div>
							<Button
								onClick={() => {
									router.push('/bookings/service-class');
								}}
								className={`w-full text-white font-semibold py-3 rounded-lg text-base sm:text-lg md:text-xl`}
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
