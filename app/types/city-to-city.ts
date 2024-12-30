export interface Route {
	id: string;
	from: string;
	to: string;
	duration: string;
	distance: string;
	image: string;
}

export interface CountryRoutes {
	country: string;
	routes: Route[];
}

export interface RouteListProps {
	routes: CountryRoutes[];
}

export interface ContentSectionProps {
	title: string;
	content: React.ReactNode;
	imageSrc: string;
	imageAlt: string;
	imagePosition?: 'left' | 'right';
	className?: string;
}
