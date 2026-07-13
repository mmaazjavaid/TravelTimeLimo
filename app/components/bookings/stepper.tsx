'use client';

import Link from 'next/link';
import { StepperProps } from '@/types/bookings';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep, setActiveStep }) => {
	return (
		<div className="w-full px-2 py-6 md:px-0">
			<div className="relative flex justify-between">
				<div
					className="absolute left-[8%] right-[8%] top-3 h-0.5 bg-border md:left-[10%] md:right-[10%]"
					aria-hidden="true"
				>
					<div
						className="h-full bg-gold transition-all duration-500 ease-expo-out"
						style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
					/>
				</div>

				{steps.map((step, index) => {
					const isComplete = index < activeStep;
					const isActive = index === activeStep;
					const isUpcoming = index > activeStep;

					return (
						<div key={index} className="relative flex flex-col items-center">
							<button
								type="button"
								onClick={() => {
									if (!isUpcoming) setActiveStep(index);
								}}
								disabled={isUpcoming}
								className={cn(
									'z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300',
									isComplete && 'border-gold bg-gold text-ink',
									isActive && 'border-gold bg-gold/15 ring-4 ring-gold/15',
									isUpcoming && 'border-border bg-muted cursor-not-allowed'
								)}
								aria-current={isActive ? 'step' : undefined}
							>
								{isComplete && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
								{isActive && <span className="h-2 w-2 rounded-full bg-gold" />}
							</button>

							<Link
								href={step.link}
								onClick={e => {
									if (isUpcoming) e.preventDefault();
									else setActiveStep(index);
								}}
								className={cn(
									'mt-2 hidden rounded-lg px-3 py-1 text-sm transition-all md:block',
									isActive && 'font-semibold text-foreground',
									isComplete && 'font-medium text-gold hover:text-gold-dark',
									isUpcoming && 'pointer-events-none text-muted-foreground'
								)}
							>
								{step.label}
							</Link>

							<span
								className={cn(
									'mt-2 text-xs md:hidden',
									isActive && 'font-semibold text-foreground',
									isComplete && 'text-gold',
									isUpcoming && 'text-muted-foreground'
								)}
							>
								{step.label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
