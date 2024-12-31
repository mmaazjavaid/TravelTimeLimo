'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

export function BookingForm() {
	const router = useRouter();

	return (
		<div className="w-full max-w-md bg-white rounded-lg shadow-lg">
			<Tabs defaultValue="one-way" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="one-way">One way</TabsTrigger>
					<TabsTrigger value="hourly">By the hour</TabsTrigger>
				</TabsList>
				<TabsContent value="one-way" className="p-6 space-y-4">
					<div className="space-y-4">
						<div>
							<Input type="text" placeholder="From: Address, airport, hotel, ..." className="w-full" />
						</div>
						<div>
							<Input type="text" placeholder="To: Address, airport, hotel, ..." className="w-full" />
						</div>
						<div className="grid grid-cols-2 gap-4">
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
							className="w-full bg-[#E85B40] hover:bg-[#D64E35] text-white"
						>
							Search
						</Button>
					</div>
				</TabsContent>
				<TabsContent value="hourly" className="p-6">
					{/* Hourly booking form would go here */}
				</TabsContent>
			</Tabs>
		</div>
	);
}
