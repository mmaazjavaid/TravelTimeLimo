import sgMail from '@sendgrid/mail';
import { EMAIL_TEMPLATE, RIDES } from '../constants';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export const sendEmail = async ({ bookingData }) => {
	const { passengerInfo, pickUpInfo, bookingInfo, paymentInfo, routeInfo, isTermsAgreed } = bookingData || {};

	const ride = RIDES.find((ride) => ride.value === bookingInfo.vehicleType);

	const emailHtml = EMAIL_TEMPLATE.replace('{passengerName}', `${passengerInfo.firstName} ${passengerInfo.lastName}`)
		.replace('{from}', bookingInfo.from)
		.replace('{to}', bookingInfo.to)
		.replace('{date}', bookingInfo.date)
		.replace('{time}', bookingInfo.time)
		.replace('{approxDistance}', routeInfo.distanceText || 'N/A')
		.replace('{approxDuration}', routeInfo.durationText || 'N/A')
		.replace('{vehicleType}', ride.title)
		.replace('{passengers}', bookingInfo.passengers)
		.replace('{luggage}', bookingInfo.luggage)
		.replace('{totalFare}', bookingInfo.totalFare.toFixed(2) + '$')
		.replace('{baseFare}', bookingInfo.baseFare.toFixed(2) + '$')
		.replace('{meetAndGreet}', bookingInfo.meetAndGreet.toFixed(2) + '$')
		.replace('{tax}', bookingInfo.tax.toFixed(2) + '$')
		.replace('{title}', passengerInfo.title)
		.replace('{firstName}', passengerInfo.firstName)
		.replace('{lastName}', passengerInfo.lastName)
		.replace('{email}', passengerInfo.email)
		.replace('{phoneNumber}', passengerInfo.phoneNumber)
		.replace('{flightNumber}', pickUpInfo.flightNumber)
		.replace('{flightArrivalTime}', pickUpInfo.flightArrivalTime)
		.replace('{pickupSign}', pickUpInfo.pickupSign)
		.replace('{notes}', pickUpInfo.notes)
		.replace('{referenceCode}', pickUpInfo.referenceCode)
		.replace('{nameOnCard}', paymentInfo.nameOnCard)
		.replace('{cardNumber}', paymentInfo.cardNumber)
		.replace('{expirationDate}', paymentInfo.expirationDate)
		.replace('{billingAddress}', paymentInfo.billingAddress)
		.replace('{zip}', paymentInfo.zip)
		.replace('{city}', paymentInfo.city)
		.replace('{state}', paymentInfo.state)
		.replace('{cvv}', paymentInfo.cvv)
		.replace('{isTermsAgreed}', isTermsAgreed ? 'Yes' : 'No');

	const msg = {
		to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
		from: process.env.NEXT_PUBLIC_SENDER_EMAIL, // Must be a verified sender in SendGrid
		subject: 'New Ride Booked',
		html: emailHtml,
	};

	try {
		const response = await sgMail.send(msg);
		console.log('Email sent successfully:', response[0].statusCode);
	} catch (error) {
		console.error('Error sending email:', error.message);
	}
};
