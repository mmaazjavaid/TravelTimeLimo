'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

const fadeInVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const scaleInVariants: Variants = {
	hidden: { opacity: 0, scale: 0.96 },
	visible: { opacity: 1, scale: 1 },
};

const staggerContainerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
};

const defaultTransition = {
	duration: 0.5,
	ease: [0.22, 1, 0.36, 1] as const,
};

interface FadeInProps extends HTMLMotionProps<'div'> {
	delay?: number;
	duration?: number;
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, ...props }: FadeInProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-60px' }}
			variants={fadeUpVariants}
			transition={{ ...defaultTransition, delay, duration }}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function FadeInView({ children, className, delay = 0, ...props }: FadeInProps) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={fadeInVariants}
			transition={{ ...defaultTransition, delay }}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function ScaleIn({ children, className, delay = 0, ...props }: FadeInProps) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={scaleInVariants}
			transition={{ ...defaultTransition, delay }}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

interface StaggerChildrenProps extends HTMLMotionProps<'div'> {
	staggerDelay?: number;
}

export function StaggerChildren({ children, className, staggerDelay = 0.08, ...props }: StaggerChildrenProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-40px' }}
			variants={{
				...staggerContainerVariants,
				visible: {
					transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
				},
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div variants={fadeUpVariants} transition={defaultTransition} className={cn(className)} {...props}>
			{children}
		</motion.div>
	);
}

export function HoverLift({ children, className, ...props }: HTMLMotionProps<'div'>) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
			className={cn('hover-lift', className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
