import { BookingModel } from "@/types/bookings";
import { MRT_ColumnDef } from "material-react-table";

const BookingsMeta: Array<MRT_ColumnDef<BookingModel>> = [
	{
		accessorKey: 'userDetails.firstName',
		header: 'First Name',
		size: 200,
	},
	{
		accessorKey: 'userDetails.lastName',
		header: 'Last Name',
		size: 200,
	},
	{
		accessorKey: 'userDetails.email',
		header: 'Email',
		size: 200,
	},
	{
		accessorKey: 'userDetails.phoneNumber',
		header: 'Phone Number',
		size: 200,
	},
	{
		accessorKey: 'pickupDetails.flightNumber',
		header: 'Flight Number',
		size: 200,
	},
	{
		accessorKey: 'pickupDetails.pickupSign',
		header: 'Pickup Sign',
		size: 200,
	},
	{
		accessorKey: 'pickupDetails.notes',
		header: 'Notes',
		size: 250,
	},
	{
		accessorKey: 'pickupDetails.referenceCode',
		header: 'Reference Code',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.from',
		header: 'From',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.to',
		header: 'To',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.date',
		header: 'Date',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.time',
		header: 'Time',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.numberOfHours',
		header: 'Number of Hours',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.vehicleType',
		header: 'Vehicle Type',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.passengers',
		header: 'Passengers',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.luggage',
		header: 'Luggage',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.baseFare',
		header: 'Base Fare',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.meetAndGreet',
		header: 'Meet & Greet',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.tax',
		header: 'Tax',
		size: 200,
	},
	{
		accessorKey: 'bookingDetails.totalFare',
		header: 'Total Fare',
		size: 200,
	},
];

export default BookingsMeta;
