import React from 'react';
import Image from 'next/image';
import RouteList from './route-list';
import { CITY_TO_CITY_ROUTES } from '@/lib/constants';

const InfoSection: React.FC = () => {
	return (
		<section className="mx-auto max-w-6xl px-4 py-12">
			<div className="overflow-hidden rounded-lg bg-gray-200">
				<div className="flex flex-col md:flex-row">
					{/* Left side - Image */}
					<div className="relative h-[250px] w-full md:h-[300px] sm:h-[350px] md:w-1/3">
						<Image
							src="/city-to-city-routes-sub.png"
							alt="Professional chauffeur standing by luxury vehicle"
							className="object-cover"
							fill
						/>
					</div>

					{/* Right side - Text */}
					<div className="flex flex-1 flex-col justify-center p-8 md:p-12">
						<div className="max-w-xl">
							<h2 className="mb-4 md:text-2xl sm:text-xl font-bold">The better way between cities</h2>
							<p className="md:text-lg sm:text-sm text-gray-600">
								Book door-to-door chauffeured rides around the world with Travel Time Limo. Your safe, private,
								comfortable ride awaits!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-8 mt-8">
				<h2 className="md:text-3xl sm:text-2xl font-bold">Travel Time Limo&apos;s City-to-City routes include:</h2>
				<RouteList routes={CITY_TO_CITY_ROUTES} />
			</div>
		</section>
	);
};

export default InfoSection;
