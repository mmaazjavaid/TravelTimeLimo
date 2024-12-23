import type { RouteListProps } from '@/types/city-to-city';

const RouteList = ({ routes }: RouteListProps) => {
	return (
		<div className="space-y-12">
			{routes.map(countryRoutes => (
				<div key={countryRoutes.country}>
					<h2 className="mb-6 md:text-2xl sm:text-xl font-semibold">{countryRoutes.country}</h2>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{countryRoutes.routes.map(route => (
							<div
								key={`${route.from}-${route.to}`}
								className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
							>
								<div className="space-y-2">
									<div className="text-sm text-gray-600">From</div>
									<div className="font-medium">{route.from}</div>
									<div className="text-sm text-gray-600">To</div>
									<div className="font-medium">{route.to}</div>
									<div className="mt-4 flex items-center justify-between text-sm text-gray-600">
										<span>{route.duration}</span>
										<span>{route.distance}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default RouteList;
