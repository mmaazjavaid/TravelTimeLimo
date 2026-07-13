import Link from 'next/link';
import type { Route } from '@/types/city-to-city';

export const RouteList = ({ countryRoutes }: any) => {
	const routes: Route[] = countryRoutes?.routes || [];
	return (
		<ul className="list-none space-y-3 pl-0">
			{routes.map(route => (
				<li key={route.id}>
					<Link
						href={`/city-to-city/routes/${route.id}`}
						className="group text-base text-foreground transition-colors hover:text-gold"
					>
						<span className="underline-offset-4 group-hover:underline">
							{route.from} {'<>'} {route.to}
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
