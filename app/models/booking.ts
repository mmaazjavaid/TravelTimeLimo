import mongoose, { Schema } from 'mongoose';

const bookingSchema = new Schema({
	passengerInfo: {
		title: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		phoneNumber: { type: String, required: true },
	},
	pickUpInfo: {
		flightNumber: { type: String },
		pickupSign: { type: String },
		notes: { type: String },
		referenceCode: { type: String },
	},
	bookingInfo: {
		type: { type: String, required: true, enum: ['hourly', 'oneWay'] },
		from: { type: String, required: true },
		to: { type: String },
		numberOfHours: { type: Number },
		date: { type: Date, required: true },
		time: { type: String, required: true },
		vehicleType: { type: String, required: true, enum: ['business_class', 'business_van_suv', 'first_class'] },
		passengers: { type: Number, required: true },
		luggage: { type: Number, required: true },
		baseFare: { type: Number, required: true },
		meetAndGreet: { type: Number, required: true },
		tax: { type: Number, required: true },
		totalFare: { type: Number, required: true },
	},
	routeInfo: {
		distanceText: { type: String },
		distanceValue: { type: Number },
		durationText: { type: String },
		durationValue: { type: Number },
	},
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
