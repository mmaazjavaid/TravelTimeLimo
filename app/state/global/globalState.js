import { hookstate } from "@hookstate/core";
import { cloneDeep } from "lodash";

export const globalInitialState = {
    stepperForm: {
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
        }
    },
};

export const globalState = hookstate(cloneDeep(globalInitialState));