'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { CITY_TO_CITY_ROUTES } from '@/lib/constants';

const MainSection: React.FC = () => {
	const { cityId } = useParams();

	const city = CITY_TO_CITY_ROUTES[0].routes.find(city => city.id === cityId);
	if (!city) return null;

	return (
		<section className="relative w-full">
			<div className="mt-8 py-8 text-center">
				<h1 className="md:text-3xl sm:text-2xl font-bold">
					{city.from} <span className="text-2xl">{'<>'}</span> {city.to}
				</h1>
			</div>
			{/* Mobile */}
			<div className="relative h-[40vh] md:hidden">
				<Image
					src={`${city.image}-mobile.png`}
					alt="Black Cadillac Escalade with chauffeur service"
					className="object-cover"
					fill
					loading="lazy"
				/>
			</div>

			{/* Desktop */}
			<div className="relative hidden h-[50vh] w-full md:block">
				<Image
					src={`${city.image}.png`}
					alt="Black Cadillac Escalade with chauffeur service"
					className="object-cover"
					fill
					loading="lazy"
				/>
			</div>
		</section>
	);
};

export default MainSection;
