import { Amenity, Ride, Step } from '@/types/bookings';
import { CountryRoutes } from '@/types/city-to-city';
import { TermsSection } from '@/types/terms';
import {
	Clock,
	Users2,
	Wifi,
	Droplet,
	Trash2,
	SmartphoneChargingIcon as PhoneCharging,
	Linkedin,
	Instagram,
	Facebook,
	Twitter,
	Youtube,
} from 'lucide-react';

export const RIDES: Ride[] = [
	{
		id: 0,
		title: 'Business Class',
		image: '/business-class-car.png',
		price: 'US$215.94',
		description: 'Most popular • Mercedes-Benz E-Class or similar',
		seats: 3,
		luggage: 2,
		baseFair: 188.72,
		meetAndGreet: 9.63,
		tax: 17.59,
	},
	{
		id: 1,
		title: 'Business Van/SUV',
		image: '/business-class-van.png',
		price: 'US$293.20',
		description: 'More spacious • Mercedes-Benz V-Class or similar',
		seats: 5,
		luggage: 5,
		baseFair: 259.68,
		meetAndGreet: 9.63,
		tax: 23.89,
	},
	{
		id: 2,
		title: 'First Class',
		image: '/first-class-car.png',
		price: 'US$353.26',
		description: 'Most luxurious • Mercedes-Benz S-Class or similar',
		seats: 3,
		luggage: 2,
		baseFair: 314.84,
		meetAndGreet: 9.63,
		tax: 28.79,
	},
];

export const AMENITIES: Amenity[] = [
	{
		icon: Clock,
		text: 'Free cancellation up until 1 hour before pickup',
	},
	{
		icon: Users2,
		text: 'Meet & Greet',
	},
	{
		icon: Droplet,
		text: 'Complimentary bottle of water',
	},
	{
		icon: Wifi,
		text: 'Complimentary in-vehicle WiFi',
	},
	{
		icon: Trash2,
		text: 'Tissues and sanitizer',
	},
	{
		icon: PhoneCharging,
		text: 'Android and iPhone chargers',
	},
];

export const SERVICE_CLASS_NOTES = [
	'Your ride includes 20 km of travel per hour booked. Extra distance or time will result in extra charges.',
	'By-the-hour bookings must end in the same city or metropolitan area as the pickup location, or an extra vehicle-return charge will apply. If you plan to go from one city to another, please book a one-way ride.',
	'Guest/luggage capacities must be abided by for safety reasons. If you are unsure, select a larger class as chauffeurs may turn down service when they are exceeded.',
	'The vehicle images above are examples. You may get a different vehicle of similar quality.',
];

export const PICKUP_INFO_NOTES = [
	'The contact info entered will receive ride updates and booking confirmation.',
	'Invoices are sent only to the booker, not the guest.',
];

export const PAYMENT_NOTES = [
	'The amount will be held from your selected payment method after the booking. We only charge you after the ride is finished.',
];

export const STEPS: Step[] = [
	{ label: 'Service Class', status: 'current', link: '/bookings/service-class' },
	{ label: 'Pickup Info', status: 'current', link: '/bookings/pickup-info' },
	{ label: 'Payment Info', status: 'current', link: '/bookings/payment-info' },
];

export const FOOTER_NAVIGATIONS = {
	company: [
		{ name: 'How Travel Time Limo works', href: '#' },
		{ name: 'Career', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Blog', href: '#' },
		{ name: 'Green initiatives', href: '#' },
		{ name: 'Become a chauffeur partner', href: '#' },
		{ name: 'Influencers', href: '#' },
	],
	business: [
		{ name: 'Overview', href: '#' },
		{ name: 'Corporations', href: '#' },
		{ name: 'Travel agencies', href: '#' },
		{ name: 'Strategic partnerships', href: '#' },
	],
	cities: [
		{ name: 'New York', href: '#' },
		{ name: 'London', href: '#' },
		{ name: 'Berlin', href: '#' },
		{ name: 'Los Angeles', href: '#' },
		{ name: 'Paris', href: '#' },
		{ name: 'All cities', href: '#' },
	],
	explore: [
		{ name: 'City-to-city rides', href: '#' },
		{ name: 'Limousine service', href: '#' },
		{ name: 'Chauffeur service', href: '#' },
		{ name: 'Private car service', href: '#' },
		{ name: 'Ground transportation', href: '#' },
		{ name: 'Airport transfer', href: '#' },
		{ name: 'All countries', href: '#' },
	],
	cityToCity: [
		{ name: 'New York - East Hampton', href: '#' },
		{ name: 'Los Angeles - San Diego', href: '#' },
		{ name: 'Miami - Palm Beach', href: '#' },
		{ name: 'London - Bristol', href: '#' },
		{ name: 'Dubai - Abu Dhabi', href: '#' },
		{ name: 'Paris - Reims', href: '#' },
	],
	legal: [
		{ name: 'Terms', href: '/terms' },
		{ name: 'Privacy policy', href: '#' },
		{ name: 'Legal notice', href: '#' },
		{ name: 'Accessibility', href: '#' },
	],
};

export const SOCIALS = [
	{
		name: 'LinkedIn',
		href: '#',
		icon: Linkedin,
	},
	{
		name: 'Instagram',
		href: '#',
		icon: Instagram,
	},
	{
		name: 'Facebook',
		href: '#',
		icon: Facebook,
	},
	{
		name: 'Twitter',
		href: '#',
		icon: Twitter,
	},
	{
		name: 'YouTube',
		href: '#',
		icon: Youtube,
	},
];

export const CITY_TO_CITY_ROUTES: CountryRoutes[] = [
	{
		country: 'United States',
		routes: [
			{
				id: 'new-york-atlantic-city',
				from: 'New York City',
				to: 'Atlantic City',
				duration: '2h 20min',
				distance: '208km',
				image: '/new-york-atlantic-city',
			},
			{
				id: 'new-york-baltimore',
				from: 'New York City',
				to: 'Baltimore',
				duration: '3h 20min',
				distance: '306km / 191m',
				image: '/new-york-baltimore',
			},
			{
				id: 'new-york-boston',
				from: 'New York City',
				to: 'Boston',
				duration: '3h 50min',
				distance: '349km / 218m',
				image: '/new-york-boston',
			},
			{
				id: 'new-york-east-hampton',
				from: 'New York City',
				to: 'East Hampton',
				duration: '2h 30min',
				distance: '174km / 109m',
				image: '/new-york-east-hampton',
			},
			{
				id: 'new-york-greenport',
				from: 'New York City',
				to: 'Greenport',
				duration: '1h 55min',
				distance: '162km / 101m',
				image: '/new-york-greenport',
			},
			{
				id: 'new-york-greenwich',
				from: 'New York City',
				to: 'Greenwich',
				duration: '55min',
				distance: '57km / 35m',
				image: '/new-york-greenwich',
			},
			{
				id: 'new-york-montauk',
				from: 'New York City',
				to: 'Montauk',
				duration: '2h 50min',
				distance: '191km / 119m',
				image: '/new-york-montauk',
			},
			{
				id: 'new-york-new-haven',
				from: 'New York City',
				to: 'New Haven',
				duration: '1h 30min',
				distance: '131km / 82m',
				image: '/new-york-new-haven',
			},
			{
				id: 'new-york-philadelphia',
				from: 'New York City',
				to: 'Philadelphia',
				duration: '1h 50min',
				distance: '154km / 96mkm',
				image: '/new-york-philadelphia',
			},
			{
				id: 'new-york-washington-dc',
				from: 'New York City',
				to: 'Washington DC',
				duration: '4h',
				distance: ' 368km / 230m',
				image: '/new-york-washington-dc',
			},
		],
	},
];

export const TERMS: TermsSection[] = [
	{
		id: 1,
		title: 'GENERAL PROVISIONS',
		href: 'general-provisions',
		content: `Travel Time Limo GmbH, Feurigstraße 59, 10827 Berlin, Germany (hereinafter referred to as "Travel Time Limo") enables its users to book transportation services via its own online platform by integrating third-party online platforms and applications for mobile devices ("apps"; all methods collectively referred to as "BL Tools"). Travel Time Limo's service consists of arranging for the transportation of a user by an independent ride service provider (Transportation Service Provider or "TSP"). Travel Time Limo arranges this business service for the user but does not in provide the actual transportation service.

		These General Terms and Conditions (hereinafter referred to as “T&Cs”) are part of each agreement of the user concerning Travel Time Limo's arrangement of business service contracts. They also describe the details of the transportation services for which Travel Time Limo provides the user a direct claim against a particular TSP.

		Conflicting general terms and conditions of the user are hereby also contradicted in the case of confirmation letters and services accepted without condition. Any terms to the contrary shall only apply insofar as the management of Travel Time Limo has expressly consented to this in writing.`,
	},
	{
		id: 2,
		title: 'CONTRACTUAL RELATIONSHIP AND CONTRACT CONCLUSION',
		href: 'contractual-relationship',
		content: '',
		subHeadings: [
			{
				id: '2.1',
				title: 'CONTRACTUAL RELATIONSHIP',
				content: `Travel Time Limo does not itself provide the transportation services in connection with the BL Tools and does not do so by way of third-party agents. Travel Time Limo only provides the user with a claim for transport against a TSP, which is independent of Travel Time Limo.

				For this purpose, Travel Time Limo concludes the necessary agreements on its own behalf with the TSP that provide the user with a claim for transport against the TSP ("contract for the benefit of third parties", also "transportation contract for the benefit of the user"). On this basis, the user is entitled to request the transportation service and any further claims in respect of that service directly from the TSP.

				Travel Time Limo and the user only agree to the arrangement of a business service contract and not to the arrangement of the actual transportation services. The claim for compensation by Travel Time Limo includes the compensation for arranging business services as well as the compensation distributed to the TSP for the transportation services.
					`,
			},
			{
				id: '2.2',
				title: 'CONCLUSION OF CONTRACT',
				content: `By transmitting a completed booking form via the BL Tools or by making arrangements by telephone with Travel Time Limo, the user transmits an offer to conclude a business service contract (“ride request” of the user). The subject matter of this contract is the provision of the ride service requested by the user.

				As an initial matter, Travel Time Limo transmits to the user an email confirmation of the details of the requested ride service that it has received. In so doing, Travel Time Limo only confirms the receipt of the user's ride request.

				It is only by separate declaration (“booking confirmation”) by email from Travel Time Limo that the business service contract between Travel Time Limo and the user is concluded for the desired ride service. The user is then directly entitled vis-à-vis the TSP to request the ride service of the TSP and to assert further claims in respect of such ride service directly against the TSP.`,
			},
		],
	},
	{
		id: 3,
		title: 'REGISTRATION OBLIGATION OF THE USER FOR THE USE OF THE BL TOOLS',
		href: 'registration-obligation',
		content: `The user provides assurance to Travel Time Limo that all information it transmits or has transmitted to Travel Time Limo on its behalf by another person is complete and accurate. Registrations by automated processes are prohibited.`,
	},
	{
		id: 4,
		title: 'SELECTED CONTENT OF THE TRANSPORTATION CONTRACT FOR THE BENEFIT OF THE USER',
		href: 'transportation-contract',
		content: `The user can only request the details for a user's ride request described under Section 4 from the TSP if this has been agreed with Travel Time Limo in the business service contract.

		The following conditions apply to the claim for transportation of the user to be asserted directly against the TSP and to be procured by Travel Time Limo:`,
		subHeadings: [
			{
				id: '4.1',
				title: 'RIDE TYPES, SERVICE CHANGES',
				content: `Depending on local availability, the user can select ride requests that include transfer rides, long-distance rides (transfer rides starting at 200 km), rides on demand (“chauffeur hailing”) and hourly bookings.

					If the ride actually carried out involves additional expenditure of effort due to the user's or guest's requests that differ from the initially requested ride, the TSP will accommodate these requests to the extent possible. The additional effort may result in additional costs for the individual business service contract. See Section 5 below for details.

					Subject to availability, a user may request changes to the ride even after the conclusion of the contract but this may result in additional charges being applied, as described in Section 5.2.

					In the case of a transfer, a long-distance ride and rides on demand, the displayed price shall be determined on the basis of a start and a destination address. An additional fee may be incurred if additional stopovers are requested according to the applicable price schedule (see Section 5 below).

					An hourly booking always begins at the booked pickup time and ends in the city area of the pickup location. If a user requests that the TSP completes the ride outside the city area of the pickup or if the number of kilometres or the duration in the relevant booking are exceeded, additional fees may apply, particularly due to the fact that the TSP must thereafter return to the city area of the pickup location.`,
			},
			{
				id: '4.2',
				title: 'PICKUP TIME',
				content: `The agreed pickup time is the pickup time specified in the Travel Time Limo booking confirmation.

				In the event of an airport pickup or pickup at a long-distance train station for which the user has provided a correct flight or train number in its booking, thus enabling Travel Time Limo to track of the arrival time of the flight or train, the agreed pickup time will be postponed in case the flight or train are late.`,
			},
			{
				id: '4.3',
				title: 'VEHICLE CLASS/VEHICLE MODEL, UPGRADE',
				content: `Depending on the regional availability of the vehicle, the user can choose from different vehicle classes in its ride request (for example, “Business Class”, ”Business Van/SUV”, ”First Class”, “Sprinter Class” or “Electric Class”).

					The vehicles shown in the BL Tools are only illustrative examples. There is no right to a particular vehicle model associated with a booked vehicle class Regional differences are possible.

					It is possible for Travel Time Limo to upgrade from the vehicle class “Business Class” to a higher vehicle class (such as “Business Van” or “First Class”) at any time at no additional cost for the user, depending on availability.`,
			},
			{
				id: '4.4',
				title: 'TRANSPORT SAFETY, CONSEQUENCES',
				content: ``,
				nestedSubHeadings: [
					{
						id: '4.4.1',
						title: 'LUGGAGE, ANIMALS',
						content: `The price in the booking confirmation includes the number of pieces of luggage that were specified in the booking form.

						Excess luggage, bulky luggage such as a wheelchair, weapons or animals that the user wishes to carry along must be specified during the booking. The TSP may refuse the transport of luggage, weapons and/or animals that have not been agreed upon; this also applies if animals are not housed in a closed and suitable transport box. The right of refusal does not exist if local statutory provisions of the region in which the transport is carried out require that the items be accommodated.

						If the TSP permits the carriage of additional luggage, weapons and/or animals that were not stipulated in the booking, additional surcharges may be charged. This may result in the total charges for the business service contract to be higher than initially specified in the booking confirmation (see Section 5 below).`,
					},
					{
						id: '4.4.2',
						title: 'TRANSPORT OF CHILDREN AND MINORS',
						content: `(A) CHILDREN The need for child restraints must be specified by the user in the ride request by specifying the number and age of the children to be transported as well as the type of child restraints required.

						(B) MINORS The transport of unaccompanied minors can be rejected by the TSP. The determination of minor status will be made in accordance with the statutory provisions of the region in which the transport is to be performed.`,
					},
					{
						id: '4.4.3',
						title: 'INFORMATION ON NUMBER OF PASSENGERS, NUMBER AND SIZE OF LUGGAGE',
						content: `The maximum number of passengers, number and size of pieces of luggage will be provided by Travel Time Limo for a specific vehicle and is set out in a binding luggage policy.

						The TSP may refuse to transport passengers or luggage if, in its opinion, the space and safety conditions do not permit such transport.`,
					},
					{
						id: '4.4.4',
						title: 'IMPEDED TRANSPORT',
						content: `The TSP may refuse to transport a user if mandatory requirements (for example, resulting from applicable law) pursuant to this Section 4.3 have not been communicated or were not correctly communicated by the user in its ride request.

						If transport is not possible for this reason, Travel Time Limo shall still be entitled to compensation from the user under the business service contract for that specific transportation.`,
					},
				],
			},
			{
				id: '4.5',
				title: 'DELAYS',
				content: `Exceptional situations such as striking air traffic controllers, inclement weather conditions, etc. can only be compensated to a limited extent. In these cases, longer waiting times or short-notice cancellations must be accepted by the user.`,
			},
			{
				id: '4.6',
				title: 'CANCELLATIONS, REBOOKINGS AND NO-SHOW RIDES',
				content: ``,
				nestedSubHeadings: [
					{
						id: '4.6.1',
						title: 'CANCELLATION',
						content: `For transfer rides, long-distance rides (transfer rides starting at 200 km) and hourly bookings, the cancellation is free if the time between the cancellation and the agreed pickup time is greater than one hour. If the time between the cancellation and the agreed pickup time is one hour or less, the full price must be paid. An effective cancellation can only be carried out using the cancellation function on the website or in the app.`,
					},
					{
						id: '4.6.2',
						title: 'REBOOKINGS',
						content: `Rebookings are generally treated as new bookings. The regulations for the handling of cancellations (Section 4.5.1 above) apply accordingly for the originally agreed ride. Accordingly, a claim for compensation by Travel Time Limo for the originally agreed ride may remain in force.`,
					},
					{
						id: '4.6.3',
						title: `NO-SHOW RIDES WITHOUT CANCELLATION, USER'S DELAY`,
						content: `In the event that a user does not show up for a ride and does not cancel it (a “no show”), the user's claim for transport vis-à-vis the TSP shall no longer be applicable; however, Travel Time Limo's shall still be entitled to compensation from the user.

						(A) FOR TRANSFER AND LONG-DISTANCE RIDES A ride is considered to be a no-show if the User or guest does not appear within 30 minutes after the agreed pickup time at the agreed pickup location.

						In the event of pickup at airports or long-distance train stations, a ride is considered to be a no-show if the User or guest does not appear within 60 minutes after the agreed pickup time at the agreed pickup location.

						No-show rides must be fully compensated, but any waiting time surcharges will not be applied. This is not the case if the TSP and the guest have communicated by telephone about a later pickup time. Any waiting time surcharges are applicable, as described under Section 5.3.1. As a general rule, there is no right to change the pickup time.

						(B) HOURLY BOOKING A ride is considered to be a no-show if the User or guest does not appear at the agreed pickup location after the end of the booked hours (calculated from the scheduled pickup time).

						In the event of pickup at airports or long-distance train stations, a ride is considered to be a no-show if the user or guest does not appear at the agreed location after the end of the booked hours according to the pickup time.

						A user shall be fully liable for no-show rides. This is not the case if the TSP and the guest have communicated by telephone about a later pickup time. The hourly booking always starts as described under Section 4.1.2 at the agreed pickup time. In this respect, any extensions of the hourly booking must be remunerated as described under Section 5.2. As a general rule, there is no right to change the pickup time.`,
					},
				],
			},
			{
				id: '4.7',
				title: 'BEHAVIOR IN THE LIMOUSINE',
				content: `The following behavioral standards apply to the users of the TSP's transport services:

				During the entire ride , applicable road traffic rules and regulations apply to all guests, particularly the obligation to wear a seat belt. The TSP's instructions must always be followed. The TSP bears the responsibility for safely completing the ride. Therefore, the guests are prohibited from opening the doors during the ride, throwing objects out of the vehicle and/or hanging out any part of the body or screaming from the vehicle. If guests wish to use any equipment or systems present in the respective vehicle, prior permission from the TSP is required.

				Smoking is prohibited in the passenger compartment of the vehicles. If the user or a guest ignores this, the user must bear the costs of a vehicle cleaning and the resulting loss of serviceability.

				The consumption of food is discouraged. Alcoholic drinks are only allowed to be consumed in the car with prior consent.`,
			},
		],
	},
	{
		id: 5,
		title: 'REMUNERATION AND PAYMENT',
		href: 'remuneration-payment',
		content: ``,
		subHeadings: [
			{
				id: '5.1',
				title: 'GENERAL PRINCIPLES',
				content: `The booking confirmation specifies the remuneration claim by Travel Time Limo.

				Key factors for this amount (including reimbursement of expenses for the ride service provided by Travel Time Limo) are: the selected vehicle class, the route, the length of time for advanced booking and the pickup time and (where applicable) pickup location.

				Booking special requests, such as multilingual chauffeurs, individual vehicle marking, intermediate stops, bulky luggage, child seats, etc. may have the effect of increasing the price.`,
			},
			{
				id: '5.2',
				title: 'RIDE CHANGES',
				content: `The user (and also the guest) may also change the ride request after the conclusion of the business service contract and, to the extent possible for the TSP, after the ride is started.
				
				In the event of a user requests an upgrade of the ride or additional services (distance or number of hours), the actual service (total distance or number of hours) shall be recalculated and charged according to the applicable price schedule. In the case of hourly bookings, any half hour commenced shall be determinative for invoicing; in other words, the half hour is rounded up from the first additional minute in the interest of better planning reliability.
				
				Accordingly, the compensation claim vis-à-vis the user will increase, as there is a corresponding increase in the reimbursement of Travel Time Limo's expenses for the business service contract on behalf of the user.
				
				If the booked distance or number of hours is shortened as compared to the booking, the agreed compensation shall remain unaffected.`,
			},
			{
				id: '5.3',
				title: 'OTHER CHARGES',
				content: ``,
				nestedSubHeadings: [
					{
						id: '5.3.1',
						title: 'WAITING TIMES FOR TRANSFER RIDES',
						content: `In the case of transfer rides, no surcharges will apply for waiting times of up to 60 minutes after the agreed pickup time for pickups at airports or long-distance train stations. In all other cases, no surcharges will apply for waiting times of up to 15 minutes from the agreed pickup time. Each additional minute of waiting time is invoiced as a share of the hourly booking prices applicable in the respective city area and for the respective vehicle class, plus applicable sales tax.`,
					},
					{
						id: '5.3.2',
						title: 'ADDITIONAL KILOMETERS FOR HOURLY BOOKINGS',
						content: `Hourly bookings consist of the inclusive kilometers (per hour) communicated in the booking form (or by telephone). Additional kilometers will be separately invoiced and are based on the route prices for the booked vehicle class in the respective city area and will include applicable sales tax.`,
					},
				],
			},
			{
				id: '5.4',
				title: 'PAYMENT MODALITIES AND TRANSACTION FEES',
				content: `The user can pay for a ride by credit card. Any credit card fees accrued are borne by Travel Time Limo. The user bears any transaction fees in the event of a payment by transfer (for example, due to different currencies or locally different accounts).`,
			},
			{
				id: '5.5',
				title: 'WARNING NOTICES, FAILED CREDIT CARD DIRECT DEBITING',
				content: `For each payment warning notice, Travel Time Limo may charge a reasonable reminder fee.

				For failed credit card debit authorizations, Travel Time Limo shall invoice the user for the expenses incurred for this (bank, credit card institution) and reserves the right to assert a reasonable processing fee per incident.`,
			},
			{
				id: '5.6',
				title: 'TRANSMISSION OF INVOICES, DUE DATE',
				content: `Travel Time Limo shall make the applicable invoice available to the user electronically for download in the User account. If payment is made by credit card, the applicable compensation is due for payment immediately. If payment is made by bank transfer, the payment term referred to in the invoice shall be applicable.`,
			},
			{
				id: '5.7',
				title: 'VOUCHERS',
				content: `Vouchers are one-off and only redeemable individually and may not be combined with additional vouchers. They cannot be redeemed for cash.`,
			},
		],
	},
	{
		id: 6,
		title: 'LIABILITY',
		href: 'liability',
		content: ``,
		subHeadings: [
			{
				id: '6.1',
				title: 'GENERAL PRINCIPLES',
				content: `Travel Time Limo is liable for damages caused by Travel Time Limo or its vicarious and service agents through intent or due to gross negligence. The TSP, including all the chauffeurs employed by the latter, are neither vicarious nor service agents of Travel Time Limo for the performance of transportation services. Rather, Travel Time Limo provides the User with a direct claim for transport services vis-à-vis the TSP.

				In the event of damages caused by simple negligence, Travel Time Limo is liable only for the violation of a material contractual obligation and only for foreseeable and typical damages. Material contractual obligations are those that enable the fulfillment of the contract in the first place and upon the fulfillment of which the user may ordinarily rely.

				Limitations of liability are not applicable within the scope of warranties provided, in the event of injuries to life, the body and health, as well as for claims arising from the Product Liability Act.`,
			},
			{
				id: '6.2',
				title: 'CONTENT OF BL TOOLS',
				content: `Travel Time Limo is not liable for the correctness, reliability, completeness and validity of the content and programs that are disseminated free of charge within the scope of BL Tools, nor for damages that arise therefrom, except to the extent that those damages have been intentionally caused by Travel Time Limo or are due to its gross negligence. This applies to all types of damages, particularly damages caused by errors, delays or interruptions in the transmission, in the event of disruption of the technical equipment and the service, incorrect content, omissions, loss or deletion of data, viruses or otherwise in the use of this online offering. Furthermore, Travel Time Limo is not liable for the availability and functionality of the offered functions.`,
			},
			{
				id: '6.3',
				title: 'THIRD-PARTY WEBSITES',
				content: `Travel Time Limo accepts no responsibility for the content, freedom from error, legality and functionality of third-party websites referred to by means of links. Links are accessed at your own risk.`,
			},
			{
				id: '6.4',
				title: 'CORRECTNESS OF TRANSMITTED INFORMATION, DISRUPTION OF ACCESS',
				content: `Travel Time Limo accepts no responsibility for the correct and complete transmission of information and that it reaches users or chauffeurs in a timely manner. The content of the booking confirmation is excepted from this.

				Travel Time Limo is not liable for disruptions in the quality of access to the BL Tools due to force majeure or due to events for which Travel Time Limo is not responsible, particularly the failure of communication networks and/or gateways. Travel Time Limo does not provide any guarantee that the website will function free of interruption and error or that any errors will be corrected.`,
			},
			{
				id: '6.5',
				title: 'INDEMNITY FROM THE USER',
				content: `The user shall indemnify Travel Time Limo for all claims and costs, including reasonable costs for a legal defense, which a third party asserts against Travel Time Limo owing to a non-contractual use of the BL Tools or because of a violation of these General Terms & Conditions.`,
			},
			{
				id: '6.6',
				title: 'OBJECTS LEFT BEHIND',
				content: `No liability is assumed for objects forgotten in the vehicle.`,
			},
		],
	},
	{
		id: 7,
		title: 'AMENDMENT OF THE OFFER OF Travel Time Limo',
		href: 'amendment-offer',
		content: `Travel Time Limo reserves the right to change the BL Tools at any time in a manner reasonable for the user in order to further develop and improve them qualitatively. Moreover, Travel Time Limo has the right to temporarily or permanently terminate its offer via BL Tools for a material reason, even without separately informing the user.`,
	},
	{
		id: 8,
		title: 'PROTECTION OF CONTENT, GRANT OF RIGHTS OF USE TO BL TOOLS',
		href: 'protection-content',
		content: `The content contained within the framework of BL Tools is protected by copyright law.

		Travel Time Limo grants the user the revocable right to use the BL Tools according to its intended purpose conditioned on the case of compliance with these T&Cs. Any use beyond this scope (such as changes, copies, re-releases, transmission, dissemination or other non-intended purposes) is prohibited.`,
	},
	{
		id: 9,
		title: 'FINAL PROVISIONS',
		href: 'final-provisions',
		content: ``,
		subHeadings: [
			{
				id: '9.1',
				title: 'WHOLE AGREEMENT, WRITTEN FORM',
				content: `These General Terms & Conditions constitute the entire agreement between Travel Time Limo and the user for the contractually agreed services. There are no collateral agreements. Amendments and additions to this Agreement must be made in writing to be valid.`,
			},
			{
				id: '9.2',
				title: 'OFFSET, RETENTION AND ASSIGNMENT',
				content: `The user may only set off against Travel Time Limo's claims and assert retention rights if their counterclaims are legally established or undisputed. This also applies to the user's notice of defects.

				The user may only assert retention rights from claims under section to the extent that they are based on the same contractual relationship.

				The user is not entitled to assign claims from the contractual relationship to third parties without the express written consent of Travel Time Limo.`,
			},
			{
				id: '9.3',
				title: 'APPLICABLE LAW, COURT OF JURISDICTION',
				content: `The law of the Federal Republic of Germany applies to all legal relations between Travel Time Limo and the user.

				Place of fulfillment is Berlin.

				Exclusive place of jurisdiction is Berlin, insofar as the user is a merchant according to the Commercial Code, or, upon suing, has no fixed place of residence in Germany. Legally binding jurisdictions remain unaffected.`,
			},
			{
				id: '9.4',
				title: 'INFORMATION ON ONLINE DISPUTE RESOLUTION',
				content: `The EU Commission has an Internet platform for the online settlement of disputes (referred to as the "OS platform". The OS platform serves as a point of contact for the out-of-court settlement of disputes concerning contractual obligations arising from online purchase contracts or online service contracts. You can reach the OS platform through the following link: ec.europa.eu/consumers/odr.

				Travel Time Limo is neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.`,
			},
			{
				id: '9.5',
				title: 'SEVERABILITY CLAUSE',
				content: `Should individual provisions of these T&Cs be or become ineffective, unenforceable or contain gaps, the remaining regulations will remain effective. The parties undertake to replace the ineffective, unenforceable or missing provisions with those that most closely approximate the meaning and economic purpose as intended by the parties.

				Version: Berlin, January 2024`,
			},
		],
	},
];
