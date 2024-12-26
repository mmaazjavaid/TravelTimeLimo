'use client';
import { CITY_TO_CITY_ROUTES } from '@/lib/constants';
import { ContentSection } from './ContentSection';
import { RouteList } from './RoutesList';
import { useParams } from 'next/navigation';

export default function CitySection() {
	const { cityId } = useParams();

	const city = CITY_TO_CITY_ROUTES[0].routes.find(city => city.id === cityId);
	if (!city) return null;

	return (
		<main className="min-h-screen bg-white">
			<ContentSection
				title="The safe and private option for your city-to-city ride"
				content={
					<p>
						You can now make use of a reliable car service to travel between cities with ease. Spend your journey in
						peace and quiet, as your personal chauffeur delivers you with total comfort to your precise destination.
						Whether you're heading to a bustling city center or a tranquil getaway spot, you'll appreciate avoiding the
						stresses of public transportation. Arrive as you intend to proceed - relaxed, recharged and ready for
						whatever lies ahead.
					</p>
				}
				imageSrc="/city-sub-section-img1.png"
				imageAlt="Professional chauffeur service with luxury vehicle"
			/>

			<ContentSection
				title="Stress-free solution"
				content={
					<p>
						Booking our City-to-City rides as an alternative to flights, trains, or car rentals means avoiding the
						crowds and staying safe on your long-distance journey. Instead of enduring long lines and multiple
						interactions before you even hit the road, you just enjoy the comfort of a private transfer in a
						top-of-the-line vehicle.
					</p>
				}
				imageSrc="/city-sub-section-img2.png"
				imageAlt="Chauffeur opening car door for client"
				imagePosition="right"
			/>

			<ContentSection
				title="Your new go-to for city-to-city travel"
				content={
					<>
						<p>
							If you're looking to escape the urban bustle and weather of {city.from} for a few days, you may be drawn
							to explore nearby destinations. Travel Time Limo's city-to-city service is on hand to deliver you to your
							chosen retreat. We operate luxury services between major cities and popular destinations in the region,
							connecting you to coastal towns, cultural hubs, and weekend getaways with comfort and style. We operate
							our luxury services on the following routes:
						</p>
						<RouteList countryRoutes={CITY_TO_CITY_ROUTES[0]} />
					</>
				}
				imageSrc="/city-sub-section-img3.png"
				imageAlt="Family with chauffeur and luxury SUV"
			/>
		</main>
	);
}
