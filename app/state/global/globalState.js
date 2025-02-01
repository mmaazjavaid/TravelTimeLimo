import { hookstate } from "@hookstate/core";
import { cloneDeep } from "lodash";

export const globalInitialState = {
    stepperForm: {
        bookingInfo: {
            from: '',
            to: '',
            date: '',
            time: ''
        },
        serviceClass: {
            rideType: 'businessClass',
        },
        pickUpInfo: {
            flightNum: null,
            pickUpSign: '',
            notes: '',
            refCode: '',
            bookFor: 'myself',
            title: '',
            fn: '',
            ln: '',
            email: '',
            phoneNum: '',
        },
        paymentInfo: {
            nameOnCard: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            saveCard: false,
        }
    },
};

export const globalState = hookstate(cloneDeep(globalInitialState));