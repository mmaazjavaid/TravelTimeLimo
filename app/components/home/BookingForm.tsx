'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

export function BookingForm() {
	const router = useRouter();

	return (
		<div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg">
			<Tabs defaultValue="one-way" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="one-way">One way</TabsTrigger>
					<TabsTrigger value="hourly">By the hour</TabsTrigger>
				</TabsList>
				<TabsContent value="one-way" className="p-4 sm:p-6 space-y-4">
					<div className="space-y-4">
						<div>
							<Input type="text" placeholder="From: Address, airport, hotel, ..." className="w-full" />
						</div>
						<div>
							<Input type="text" placeholder="To: Address, airport, hotel, ..." className="w-full" />
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="relative">
								<Input type="text" placeholder="Thu, Dec 19, 2024" className="w-full pl-10" />
								<Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
							</div>
							<Input type="time" defaultValue="17:40" className="w-full" />
						</div>
						<p className="text-sm text-gray-500">Chauffeur will wait 15 minutes free of charge.</p>
						<Button
							onClick={() => {
								router.push('/bookings/service-class');
							}}
							className="w-full text-white"
							variant="gradient"
						>
							Search
						</Button>
					</div>
				</TabsContent>
				<TabsContent value="hourly" className="p-4 sm:p-6 space-y-4">
					<div className="space-y-4">
						<div>
							<Input type="text" placeholder="Pickup location" className="w-full" />
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="relative">
								<Input type="text" placeholder="Pickup date" className="w-full pl-10" />
								<Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
							</div>
							<Input type="time" placeholder="Pickup time" className="w-full" />
						</div>
						<div>
							<Input type="number" placeholder="Number of hours" className="w-full" />
						</div>
						<Button
							onClick={() => {
								router.push('/bookings/service-class');
							}}
							className="w-full text-white"
							variant="gradient"
						>
							Search
						</Button>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
