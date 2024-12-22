export interface Step {
	label: string;
	status: 'completed' | 'current' | 'upcoming';
	link: string;
}

export interface StepperProps {
	steps: Step[];
}

export interface Amenity {
	icon: React.ElementType;
	text: string;
}

export interface BookingDetailsProps {
	date: string;
	location: string;
	duration: string;
	distance: string;
}

export interface PriceBreakdownProps {
	baseFare: number;
	meetAndGreet: number;
	tax: number;
}

export interface Ride {
	id: number;
	title: string;
	image: string;
	price: string;
	description: string;
	seats: number;
	luggage: number;
	baseFair: number;
	meetAndGreet: number;
	tax: number;
}

export interface ExpandedRide {
	id: number | null;
	isExpanded: boolean;
}

