'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Check, ChevronDown, Users } from 'lucide-react';
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
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{RIDES.map(ride => {
				const isSelected = selectedRide === ride.id;
				const fare = ride.value === 'business_class' ? sedanFare + sedanFare * 0.08625 : suvFare + suvFare * 0.08625;
				const isExpanded = expandedRide?.id === ride.id && expandedRide?.isExpanded;

				return (
					<motion.div
						key={ride.id}
						layout
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
										tax: ride.value === 'business_class' ? sedanFare * 0.08625 : suvFare * 0.08625,
										totalFare: fare,
									},
								},
							});
						}}
						whileHover={{ y: -2 }}
						transition={{ layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
						role="radio"
						aria-checked={isSelected}
						tabIndex={0}
						onKeyDown={e => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								setSelectedRide(ride.id);
							}
						}}
						className={cn(
							'relative cursor-pointer overflow-hidden rounded-xl border bg-white p-5 shadow-soft transition-colors duration-200',
							isSelected ? 'border-2 border-gold bg-gold/5 shadow-lift' : 'border-border/60 hover:border-gold/30'
						)}
					>
						{isSelected && (
							<span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink">
								<Check className="h-3.5 w-3.5" strokeWidth={3} />
							</span>
						)}

						<div className="flex justify-center py-2">
							<Image src={ride.image} alt={ride.title} width={180} height={110} className="h-auto w-full max-w-[220px] object-contain" />
						</div>

						<h3 className="mt-2 font-display text-lg font-semibold text-foreground">{ride.title}</h3>
						<p className="mt-0.5 text-sm text-muted-foreground">{ride.description}</p>

						<div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
							<span className="inline-flex items-center gap-1.5">
								<Users className="h-4 w-4" />
								{ride.seats} passengers
							</span>
							<span className="inline-flex items-center gap-1.5">
								<Briefcase className="h-4 w-4" />
								{ride.luggage} bags
							</span>
						</div>

						<div className="mt-4 flex items-end justify-between border-t border-border/60 pt-4">
							<div>
								<p className="text-xs uppercase tracking-wide text-muted-foreground">Total fare</p>
								<p className="font-display text-2xl font-semibold tabular-nums text-foreground">US${fare.toFixed(2)}</p>
							</div>
							<button
								type="button"
								onClick={e => {
									e.stopPropagation();
									setExpandedRide({ isExpanded: !isExpanded, id: ride.id });
								}}
								className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								aria-label="Toggle price breakdown"
							>
								Details
								<ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', isExpanded && 'rotate-180')} />
							</button>
						</div>

						<AnimatePresence initial={false}>
							{isExpanded && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
									className="overflow-hidden"
								>
									<PriceBreakdown
										baseFare={ride.value === 'business_class' ? sedanFare : suvFare}
										meetAndGreet={0}
										tax={ride.value === 'business_class' ? sedanFare * 0.08625 : suvFare * 0.08625}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				);
			})}
		</div>
	);
};

export default RideCard;
