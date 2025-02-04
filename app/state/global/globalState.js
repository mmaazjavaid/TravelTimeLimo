import { hookstate } from '@hookstate/core';
import { cloneDeep } from 'lodash';

export const globalInitialState = {
	stepperForm: {
		bookingInfo: {
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
			flightNum: null,
			pickUpSign: '',
			notes: '',
			refCode: '',
		},
		paymentInfo: {
			nameOnCard: '',
			cardNumber: '',
			expirationDate: '',
			cvv: '',
			saveCard: false,
		},
	},
};

export const globalState = hookstate(cloneDeep(globalInitialState));
