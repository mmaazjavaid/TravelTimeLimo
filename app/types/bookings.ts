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
	value: string;
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

export interface BookingModel {
	userDetails: {
		title: string;
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
	};
	pickupDetails?: {
		flightNumber?: string;
		pickupSign?: string;
		notes?: string;
		referenceCode?: string;
	};
	bookingDetails: {
		from: string;
		to: string;
		numberOfHours: number;
		date: Date | string; // Use Date if working directly with Date objects, or string for serialized data
		time: string;
		vehicleType: 'business_class' | 'business_van_suv' | 'first_class';
		passengers: number;
		luggage: number;
		baseFare: number;
		meetAndGreet: number;
		tax: number;
		totalFare: number;
	};
}
