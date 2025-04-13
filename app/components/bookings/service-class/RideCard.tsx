'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Briefcase, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { RIDES } from '@/lib/constants';
import { ExpandedRide } from '@/types/bookings';
import PriceBreakdown from './PriceBreakdown';
import { globalStateController } from '@/state/global/globalStateController';
import { calculateFare } from '@/lib/utils';

const getRideClassNames = ({ id, selectedRide }: { id: number; selectedRide: number }) => {
	const isSelected = selectedRide === id;
	const isFirst = id === 0;
	const isLast = id === RIDES.length - 1;

	return `
        p-4 cursor-pointer hover:bg-gray-200 transition-colors
        ${isSelected ? 'bg-gray-200 border-black border-2' : 'border-gray-300'}
        ${isSelected && isFirst && 'rounded-t-lg'}
        ${isSelected && isLast && 'rounded-b-lg'}
        ${!isSelected && isFirst && 'rounded-t-lg'} 
        ${!isSelected && isLast && 'rounded-b-lg'}
        ${(isFirst || isLast) && 'overflow-hidden'}
    `;
};

const RideCard: React.FC = () => {
	const [selectedRide, setSelectedRide] = useState<number>(0); // Track the selected ride
	const [expandedRide, setExpandedRide] = useState<ExpandedRide>({ id: null, isExpanded: false });
	const { stepperValues } = globalStateController.useState(['stepperForm', 'isAustin'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;
	const routeDistance = stepperValues?.stepperForm?.routeInfo?.distanceValue;
	const sedanFare = calculateFare(routeDistance, stepperValues?.isAustin).sedan;
	console.log(sedanFare);


	const suvFare = calculateFare(routeDistance, stepperValues?.isAustin).suv;
	console.log(suvFare);
	console.log(stepperValues?.stepperForm)

	useEffect(() => {
		if (routeDistance) {
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					bookingInfo: {
						...bookingInfo,
						baseFare: sedanFare,
						totalFare: sedanFare + (sedanFare * 0.08625),
						meetAndGreet: 0,
						tax: (sedanFare * 0.08625),
					},
				},
			});
		}
	}, [routeDistance]);

	return (
		<div className="border border-gray-300 rounded-lg">
			<div className="divide-y divide-gray-300">
				{RIDES.map(ride => (
					<div
						key={ride.id}
						className={getRideClassNames({ id: ride.id, selectedRide })} // Use the helper function to determine class names
						style={{
							borderWidth: selectedRide === ride.id ? '2px' : undefined, // Apply border width conditionally
							borderColor: selectedRide === ride.id ? 'black' : undefined, // Apply border color conditionally
						}}
						onClick={() => {
							setSelectedRide(ride.id);
							globalStateController.updateState({
								stepperForm: {
									...stepperValues?.stepperForm,
									bookingInfo: {
										...bookingInfo,
										vehicleType: ride.value,
										passengers: ride.seats,
										luggage: ride.luggage,
										baseFare: ride.value === 'business_class' ? sedanFare : suvFare,
										meetAndGreet: 0,
										tax: ride.value === 'business_class' ? (sedanFare * 0.08625) : (suvFare * 0.08625),
										totalFare: ride.value === 'business_class' ? sedanFare + (sedanFare * 0.08625) : suvFare + (suvFare * 0.08625),
									},
								},
							});
						}} // Set the selected ride on click
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<Image src={ride.image} alt={ride.title} width={120} height={80} className="rounded" />
								<div>
									<div className="flex items-center gap-2">
										<h3 className="font-semibold">{ride.title}</h3>
									</div>
									<div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
										<Users fill="#000" className="h-4 w-4" />
										<span>{ride.seats}</span>
										<Briefcase stroke="#000" fill="none" strokeWidth={2.5} className="h-4 w-4" />
										<span>{ride.luggage}</span>
									</div>
									<p className="text-sm text-gray-600 mt-1">{ride.description}</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="font-semibold">{`US${ride.value === 'business_class' ? (sedanFare + (sedanFare * 0.08625)).toFixed(2) : (suvFare + (suvFare * 0.08625)).toFixed(2)}`}</p>
								{expandedRide?.id === ride.id && expandedRide?.isExpanded ? (
									<ChevronUp
										onClick={() => setExpandedRide({ isExpanded: false, id: ride.id })}
										className="h-6 w-6 stroke-black"
									/>
								) : (
									<ChevronDown
										onClick={() => setExpandedRide({ isExpanded: true, id: ride.id })}
										className="h-6 w-6 stroke-black"
									/>
								)}
							</div>
						</div>
						{expandedRide?.id === ride.id && expandedRide?.isExpanded && (
							<PriceBreakdown
								baseFare={ride.value === 'business_class' ? sedanFare : suvFare}
								meetAndGreet={0}
								tax={ride.value === 'business_class' ? (sedanFare * 0.08625) : (suvFare * 0.08625)}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default RideCard;
