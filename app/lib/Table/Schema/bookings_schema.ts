import { BookingModel } from '@/types/bookings';
import { MRT_ColumnDef } from 'material-react-table';

const BookingsMeta: Array<MRT_ColumnDef<BookingModel>> = [
	{
		accessorKey: 'passengerInfo.firstName',
		header: 'First Name',
		size: 200,
	},
	{
		accessorKey: 'passengerInfo.lastName',
		header: 'Last Name',
		size: 200,
	},
	{
		accessorKey: 'passengerInfo.email',
		header: 'Email',
		size: 200,
	},
	{
		accessorKey: 'passengerInfo.phoneNumber',
		header: 'Phone Number',
		size: 200,
	},
	{
		accessorKey: 'pickUpInfo.flightNumber',
		header: 'Flight Number',
		size: 200,
	},
	{
		accessorKey: 'pickUpInfo.flightArrivalTime',
		header: 'Flight Arrival Time',
		size: 200,
	},
	{
		accessorKey: 'pickUpInfo.pickupSign',
		header: 'Pickup Sign',
		size: 200,
	},
	{
		accessorKey: 'pickUpInfo.notes',
		header: 'Notes',
		size: 250,
	},
	{
		accessorKey: 'pickUpInfo.referenceCode',
		header: 'Reference Code',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.type',
		header: 'Type',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.from',
		header: 'From',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.to',
		header: 'To',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.date',
		header: 'Date',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.time',
		header: 'Time',
		size: 200,
	},
	{
		accessorKey: 'routeInfo.distanceText',
		header: 'Approx. Distance',
		size: 200,
	},
	{
		accessorKey: 'routeInfo.durationText',
		header: 'Approx. Duration',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.numberOfHours',
		header: 'Number of Hours',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.vehicleType',
		header: 'Vehicle Type',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.passengers',
		header: 'Passengers',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.luggage',
		header: 'Luggage',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.baseFare',
		header: 'Base Fare',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.meetAndGreet',
		header: 'Meet & Greet',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.tax',
		header: 'Tax',
		size: 200,
	},
	{
		accessorKey: 'bookingInfo.totalFare',
		header: 'Total Fare',
		size: 200,
	},
	{
		accessorKey: 'isTermsAgreed',
		header: 'Agreed to Terms',
		size: 200,
		accessorFn: (row: any) => (row.isTermsAgreed ? 'Yes' : 'No'),
	},
];

export default BookingsMeta;
