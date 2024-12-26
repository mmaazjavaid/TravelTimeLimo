import Link from 'next/link';
import type { Route } from '@/types/city-to-city';

export const RouteList = ({ countryRoutes }: any) => {
	const routes: Route[] = countryRoutes?.routes || [];
	return (
		<ul className="space-y-2 list-disc pl-5 text-2xl">
			{routes.map(route => (
				<li key={route.id}>
					<Link
						href={`/city-to-city/routes/${route.id}`}
						className="relative text-base hover:text-gray-600 transition-colors duration-300 group"
					>
						<span className="relative inline-block">
							{route.from} {'<>'} {route.to}
							{/* Underline Effect */}
							<span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 transition-all duration-700 group-hover:w-0"></span>
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
