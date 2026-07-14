'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { StepperProps } from '@/types/bookings';
import { Car, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const CIRCLE_RADIUS = 12; // h-6 w-6
const CAR_HALF_WIDTH = 12; // h-6 w-6
const GAP = 1; // breathing room between the car and the circle it's parked beside
const SIDE_OFFSET = CIRCLE_RADIUS + GAP + CAR_HALF_WIDTH;
const CAR_LIFT = 7; // raises the car above the track line instead of centering on it

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
	const prefersReducedMotion = useReducedMotion();
	const trackRef = useRef<HTMLDivElement>(null);
	const [trackWidth, setTrackWidth] = useState(0);
	const progress = steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		const update = () => setTrackWidth(el.offsetWidth);
		update();
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	// The car parks beside its current checkpoint rather than on top of it — to
	// the right for every step it's arriving at along the way, and to the left
	// for the final one, since there's no track past "Confirmed Ride" for it to
	// sit on. Computed in real pixels (not CSS %/calc mixed with a transform)
	// because Framer Motion can't reliably tween between two different calc()
	// strings — that caused a visible "flies in from off-screen" glitch
	// elsewhere in this app the last time this was tried with percentages.
	const isLastStep = activeStep === steps.length - 1;
	const sideOffset = isLastStep ? -SIDE_OFFSET : SIDE_OFFSET;
	const carX = (progress / 100) * trackWidth + sideOffset - CAR_HALF_WIDTH;

	return (
		<div className="w-full px-2 pt-6 pb-8 md:px-0 md:pb-14">
			<div className="relative flex justify-between">
				{/* Insets are pixel-based (the circle's full width, h-6/w-6 = 24px) so the
				    track starts exactly at the first circle's trailing edge and ends at
				    the last circle's leading edge — not behind/through the circles — on
				    every breakpoint and step count; percentage insets drifted out of
				    alignment depending on viewport width. */}
				<div
					ref={trackRef}
					className="absolute left-6 right-6 top-3 h-0.5 -translate-y-1/2 overflow-visible rounded-full bg-border"
					aria-hidden="true"
				>
					<motion.div
						className="relative h-full overflow-hidden rounded-full bg-gold"
						initial={false}
						animate={{ width: `${progress}%` }}
						transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						{/* Continuous shimmer sweep across the filled portion — ambient
						    motion so the bar always reads as "alive", not just a static
						    fill that happens to animate once on step change. */}
						{!prefersReducedMotion && (
							<motion.div
								className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent"
								animate={{ left: ['-40%', '140%'] }}
								transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
							/>
						)}
					</motion.div>

					{/* The car itself is the progress indicator — it drives to its
					    parking spot (spring) whenever a step changes, leans slightly
					    into the "turn" while moving, and idles with a subtle suspension
					    bounce when stopped, so there's always something alive to watch
					    rather than a one-shot transition that's easy to miss. */}
					{trackWidth > 0 && (
						<motion.div
							className="absolute z-20"
							style={{ top: '50%', marginTop: -CAR_HALF_WIDTH - CAR_LIFT, left: 0 }}
							initial={false}
							animate={{ x: carX, rotate: prefersReducedMotion ? 0 : [0, -8, 0] }}
							transition={
								prefersReducedMotion
									? { duration: 0 }
									: {
											x: { type: 'spring', stiffness: 85, damping: 15 },
											rotate: { duration: 0.7, ease: 'easeOut' },
										}
							}
						>
							<motion.div
								className="relative"
								animate={prefersReducedMotion ? {} : { y: [0, -2.5, 0] }}
								transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
							>
								<div className="absolute left-1/2 top-[85%] h-1.5 w-6 -translate-x-1/2 rounded-full bg-ink/25 blur-[2px]" />
								<Car
									className="relative h-6 w-6 text-gold"
									strokeWidth={2}
									style={{ filter: 'drop-shadow(0 2px 3px rgba(169,129,74,0.5))' }}
								/>
							</motion.div>
						</motion.div>
					)}
				</div>

				{steps.map((step, index) => {
					const isComplete = index < activeStep;
					const isActive = index === activeStep;
					const isUpcoming = index > activeStep;
					const isClickable = !isUpcoming;

					const circle = (
						<motion.span
							initial={false}
							animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							className={cn(
								'z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-300',
								isComplete && 'border-gold bg-gold text-ink',
								isActive && 'border-gold bg-gold/15 ring-4 ring-gold/15',
								isUpcoming && 'border-border bg-muted'
							)}
						>
							{isComplete && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
							{isActive && <span className="h-2 w-2 rounded-full bg-gold" />}
						</motion.span>
					);

					// The column is fixed at the circle's own width (w-6 = 24px) and the
					// label is positioned absolutely below it — this decouples the
					// circle's position from the label's text width, so the circle
					// always sits exactly at its "natural" spot in the row (what the
					// track's fixed pixel insets are aligned to). Previously the label
					// (much wider than the circle) set the column's width and the
					// circle was centered within *that*, which shifted the end circles
					// inward and left the track visibly short of both ends.
					return (
						<div key={index} className="relative flex w-6 flex-col items-center">
							{isClickable ? (
								<Link href={step.link} aria-current={isActive ? 'step' : undefined} aria-label={step.label}>
									{circle}
								</Link>
							) : (
								<span aria-disabled="true">{circle}</span>
							)}

							{isClickable ? (
								<Link
									href={step.link}
									className={cn(
										'absolute top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm transition-colors md:block',
										index === 0 ? 'left-0 translate-x-0' : index === steps.length - 1 ? 'right-0 left-auto translate-x-0' : 'left-1/2',
										isActive && 'font-semibold text-foreground',
										isComplete && 'font-medium text-gold hover:text-gold-dark'
									)}
								>
									{step.label}
								</Link>
							) : (
								<span
									className={cn(
										'absolute top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1 text-sm text-muted-foreground md:block',
										index === 0 ? 'left-0 translate-x-0' : index === steps.length - 1 ? 'right-0 left-auto translate-x-0' : 'left-1/2'
									)}
								>
									{step.label}
								</span>
							)}
						</div>
					);
				})}
			</div>

			{/* Mobile: individual per-circle labels don't have room to avoid
			    overlapping each other once the circles sit at precise, evenly-spaced
			    positions (fixed to their real edges, not padded out by label width).
			    A single current-step summary avoids that collision entirely and is
			    the more common mobile stepper pattern anyway. */}
			<p className="mt-3 text-center text-xs font-medium text-muted-foreground md:hidden">
				Step {activeStep + 1} of {steps.length} ·{' '}
				<span className="text-foreground">{steps[activeStep]?.label}</span>
			</p>
		</div>
	);
};
