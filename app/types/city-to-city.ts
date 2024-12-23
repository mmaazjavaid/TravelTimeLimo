export interface Route {
	country: string;
	routes: {
		from: string;
		to: string;
		duration: string;
		distance: string;
	}[];
}

export interface RouteListProps {
	routes: Route[];
}
