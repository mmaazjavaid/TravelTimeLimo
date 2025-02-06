import { hookstate } from '@hookstate/core';
import { cloneDeep } from 'lodash';

export const globalInitialState = {
	stepperForm: {
		bookingInfo: {
			type: 'oneWay',
			from: '',
			to: '',
			date: '',
			time: '',
			numberOfHours: 0,
			vehicleType: 'business_class',
			passengers: 3,
			totalFare: 215.94,
			luggage: 2,
			baseFare: 188.72,
			meetAndGreet: 9.63,
			tax: 17.59,
		},
		passengerInfo: {
			title: '',
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
		},
		pickUpInfo: {
			flightNumber: '',
			pickupSign: '',
			notes: '',
			referenceCode: '',
		},
		paymentInfo: {
			nameOnCard: '',
			cardNumber: '',
			expirationDate: '',
			cvv: '',
			saveCard: false,
		},
		routeInfo: {
			distanceText: '',
			distanceValue: 0,
			durationText: '',
			durationValue: 0,
		},
	},
};

export const globalState = hookstate(cloneDeep(globalInitialState));
