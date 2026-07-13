'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { CITY_TO_CITY_ROUTES } from '@/lib/constants';
import { FadeIn } from '@/components/ui/motion';

const MainSection: React.FC = () => {
	const { cityId } = useParams();

	const city = CITY_TO_CITY_ROUTES[0].routes.find(city => city.id === cityId);
	if (!city) return null;

	return (
		<section className="relative w-full">
			<FadeIn className="section-padding pb-8 pt-4 text-center">
				<span className="text-label text-gold">City-to-City Route</span>
				<h1 className="text-title mt-3 text-foreground">
					{city.from} <span className="text-gold">&lt;&gt;</span> {city.to}
				</h1>
			</FadeIn>

			<div className="relative h-[40vh] w-full md:h-[50vh]">
				<Image
					src={`${city.image}.png`}
					alt={`${city.from} to ${city.to} chauffeur service`}
					className="object-cover"
					fill
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
			</div>
		</section>
	);
};

export default MainSection;
