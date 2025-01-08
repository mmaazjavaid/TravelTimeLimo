'use client';

import Link from 'next/link';
import { StepperProps } from '@/types/bookings';
import { STYLES } from '@/lib/commonStyles';

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep, setActiveStep }) => {
	return (
		<div className="w-full py-4 md:py-6 px-2 md:px-0">
			<div className="relative flex justify-between">
				{/* Line connecting the steps */}
				<div className="absolute top-[11px] left-[6%] right-[6%] h-[3px] bg-gray-200" aria-hidden="true" />

				{/* Steps */}
				{steps.map((step, index) => (
					<div key={index} className="relative flex flex-col items-center group">
						{/* Circle */}
						<div
							className={`w-[22px] h-[22px] rounded-full z-10 border-[2px] 
                ${
									index < activeStep
										? `${STYLES.gray_white_gradient.color}`
										: index === activeStep
										? `${STYLES.gray_blue_gradient.color}`
										: 'border-gray-200 bg-gray-100'
								}`}
						/>

						{/* Label - Link */}
						<Link href={step.link}>
							<span
								onClick={e => {
									// Prevent navigation if the step is not active
									if (index > activeStep) {
										e.preventDefault();
									} else setActiveStep(index);
								}}
								className={`hidden md:block mt-2 text-sm rounded-full px-3 py-1 whitespace-nowrap transition-all duration-300 ease-in-out
                ${
									index <= activeStep
										? 'bg-gray-200 text-black font-medium hover:bg-white hover:text-gray-400'
										: 'text-gray-400 pointer-events-none'
								}`}
							>
								{step.label}
							</span>
						</Link>

						{/* Mobile Tooltip */}
						<Link href={step.link}>
							<span
								onClick={e => {
									// Prevent navigation if the step is not active
									if (index > activeStep) {
										e.preventDefault();
									} else setActiveStep(index);
								}}
								className={`absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 
                md:hidden opacity-0 group-hover:opacity-100 transition-opacity
                bg-gray-900 text-white text-xs rounded-md py-1 px-2 whitespace-nowrap
                ${index <= activeStep ? 'block' : 'hidden'}`}
							>
								{step.label}
							</span>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
