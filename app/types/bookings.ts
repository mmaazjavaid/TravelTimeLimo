/* Layout */
export interface Step {
	label: string;
	status: 'completed' | 'current' | 'upcoming';
	link: string;
}

export interface StepperProps {
	steps: Step[];
	activeStep: number;
	setActiveStep: (step: number) => void;
}

export interface BookingDetailsProps {
	date: string;
	location: string;
	duration: string;
	distance: string;
}

/* Service Class */

export interface Amenity {
	icon: React.ElementType;
	text: string;
}

export interface NotesProps {
	notes: string[];
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

/* Pickup Info */
export interface PickupData {
	bookingFor: 'myself' | 'someone-else';
	flightNumber: string;
	pickupSign: string;
	notes: string;
	referenceCode: string;
}
