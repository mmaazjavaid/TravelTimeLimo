'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Briefcase, ChevronDown, ChevronUp, Users } from 'lucide-react';
import { RIDES } from '@/lib/constants';
import { ExpandedRide } from '@/types/bookings';
import PriceBreakdown from './PriceBreakdown';
import { globalStateController } from '@/state/global/globalStateController';
import { calculateFare } from '@/lib/utils';
import { cn } from '@/lib/utils';

const RideCard: React.FC = () => {
	const [selectedRide, setSelectedRide] = useState<number>(0);
	const [expandedRide, setExpandedRide] = useState<ExpandedRide>({ id: null, isExpanded: false });
	const { stepperValues } = globalStateController.useState(['stepperForm', 'isAustin'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;
	const routeDistance = stepperValues?.stepperForm?.routeInfo?.distanceValue;
	const sedanFare = calculateFare(routeDistance, stepperValues?.isAustin).sedan;
	const suvFare = calculateFare(routeDistance, stepperValues?.isAustin).suv;

	useEffect(() => {
		if (routeDistance) {
			globalStateController.updateState({
				stepperForm: {
					...stepperValues?.stepperForm,
					bookingInfo: {
						...bookingInfo,
						baseFare: sedanFare,
						totalFare: sedanFare + sedanFare * 0.08625,
						meetAndGreet: 0,
						tax: sedanFare * 0.08625,
					},
				},
			});
		}
	}, [routeDistance]);

	return (
		<div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-soft">
			<div className="divide-y divide-border/60">
				{RIDES.map(ride => {
					const isSelected = selectedRide === ride.id;
					const fare =
						ride.value === 'business_class'
							? sedanFare + sedanFare * 0.08625
							: suvFare + suvFare * 0.08625;

					return (
						<div
							key={ride.id}
							className={cn(
								'cursor-pointer p-5 transition-all duration-200',
								isSelected ? 'border-l-4 border-l-gold bg-gold/5' : 'hover:bg-surface'
							)}
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
											tax:
												ride.value === 'business_class' ? sedanFare * 0.08625 : suvFare * 0.08625,
											totalFare: fare,
										},
									},
								});
							}}
						>
							<div className="flex items-center justify-between gap-4">
								<div className="flex items-center gap-4">
									<div className="relative overflow-hidden rounded-lg">
										<Image src={ride.image} alt={ride.title} width={100} height={68} className="rounded-lg" />
									</div>
									<div>
										<h3 className="font-semibold text-foreground">{ride.title}</h3>
										<div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
											<span className="inline-flex items-center gap-1">
												<Users className="h-4 w-4" />
												{ride.seats}
											</span>
											<span className="inline-flex items-center gap-1">
												<Briefcase className="h-4 w-4" />
												{ride.luggage}
											</span>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">{ride.description}</p>
									</div>
								</div>
								<div className="flex shrink-0 items-center gap-2">
									<p className="font-display text-lg font-semibold text-foreground">US${fare.toFixed(2)}</p>
									<button
										type="button"
										onClick={e => {
											e.stopPropagation();
											setExpandedRide({
												isExpanded: !(expandedRide?.id === ride.id && expandedRide?.isExpanded),
												id: ride.id,
											});
										}}
										className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
										aria-label="Toggle price breakdown"
									>
										{expandedRide?.id === ride.id && expandedRide?.isExpanded ? (
											<ChevronUp className="h-5 w-5" />
										) : (
											<ChevronDown className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>
							{expandedRide?.id === ride.id && expandedRide?.isExpanded && (
								<div className="mt-4 border-t border-border/60 pt-4">
									<PriceBreakdown
										baseFare={ride.value === 'business_class' ? sedanFare : suvFare}
										meetAndGreet={0}
										tax={ride.value === 'business_class' ? sedanFare * 0.08625 : suvFare * 0.08625}
									/>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RideCard;
