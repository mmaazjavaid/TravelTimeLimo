import sgMail from '@sendgrid/mail';
import { EMAIL_TEMPLATE } from '../constants';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export const sendEmail = async ({ to, subject, bookingData, html = '' }) => {
	const { passengerInfo, pickUpInfo, bookingInfo } = bookingData || {};

	const emailHtml = EMAIL_TEMPLATE.replace('{passengerName}', `${passengerInfo.firstName} ${passengerInfo.lastName}`)
		.replace('{from}', bookingInfo.from)
		.replace('{to}', bookingInfo.to)
		.replace('{date}', bookingInfo.date)
		.replace('{time}', bookingInfo.time)
		.replace('{vehicleType}', bookingInfo.vehicleType)
		.replace('{passengers}', bookingInfo.passengers)
		.replace('{luggage}', bookingInfo.luggage)
		.replace('{totalFare}', bookingInfo.totalFare.toFixed(2))
		.replace('{baseFare}', bookingInfo.baseFare.toFixed(2))
		.replace('{meetAndGreet}', bookingInfo.meetAndGreet.toFixed(2))
		.replace('{tax}', bookingInfo.tax.toFixed(2))
		.replace('{title}', passengerInfo.title)
		.replace('{firstName}', passengerInfo.firstName)
		.replace('{lastName}', passengerInfo.lastName)
		.replace('{email}', passengerInfo.email)
		.replace('{phoneNumber}', passengerInfo.phoneNumber)
		.replace('{flightNumber}', pickUpInfo.flightNumber)
		.replace('{pickupSign}', pickUpInfo.pickupSign)
		.replace('{notes}', pickUpInfo.notes)
		.replace('{referenceCode}', pickUpInfo.referenceCode);

	const msg = {
		to,
		from: process.env.NEXT_PUBLIC_SENDER_EMAIL, // Must be a verified sender in SendGrid
		subject,
		html: emailHtml,
	};

	try {
		const response = await sgMail.send(msg);
		console.log('Email sent successfully:', response[0].statusCode);
	} catch (error) {
		console.error('Error sending email:', error.message);
	}
};
