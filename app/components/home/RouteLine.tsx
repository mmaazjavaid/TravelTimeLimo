'use client';

import { useEffect } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Car, MapPin } from 'lucide-react';

const PATH_D = 'M 30 95 C 190 25, 410 115, 560 45';
const START = { x: 30, y: 95 };
const C1 = { x: 190, y: 25 };
const C2 = { x: 410, y: 115 };
const END = { x: 560, y: 45 };

const drawEase = [0.65, 0, 0.35, 1] as const;

function bezierPoint(t: number) {
	const mt = 1 - t;
	return {
		x: mt * mt * mt * START.x + 3 * mt * mt * t * C1.x + 3 * mt * t * t * C2.x + t * t * t * END.x,
		y: mt * mt * mt * START.y + 3 * mt * mt * t * C1.y + 3 * mt * t * t * C2.y + t * t * t * END.y,
	};
}

function bezierAngle(t: number) {
	const mt = 1 - t;
	const dx = 3 * mt * mt * (C1.x - START.x) + 6 * mt * t * (C2.x - C1.x) + 3 * t * t * (END.x - C2.x);
	const dy = 3 * mt * mt * (C1.y - START.y) + 6 * mt * t * (C2.y - C1.y) + 3 * t * t * (END.y - C2.y);
	return (Math.atan2(dy, dx) * 180) / Math.PI;
}

// A miniature live trip tracker, echoing the "driver en route" motif of a
// ride app: a pin drops at the destination, the pickup point pulses like a
// live location marker, and a car glides the S-curve route on a loop.
export function RouteLine() {
	const shouldReduceMotion = useReducedMotion();
	const t = useMotionValue(0);
	const carPoint = useTransform(t, bezierPoint);
	const carX = useTransform(carPoint, (p) => p.x);
	const carY = useTransform(carPoint, (p) => p.y);
	const carAngle = useTransform(t, bezierAngle);
	const carOpacity = useTransform(t, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

	useEffect(() => {
		if (shouldReduceMotion) return;
		const controls = animate(t, 1, {
			duration: 2.4,
			delay: 1.1,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0.9,
			ease: [0.45, 0, 0.55, 1],
		});
		return () => controls.stop();
	}, [shouldReduceMotion, t]);

	if (shouldReduceMotion) {
		return (
			<div className="mt-2 w-full">
				<svg viewBox="0 0 600 140" className="h-auto w-full" fill="none" aria-hidden="true">
					<path d={PATH_D} stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
					<circle cx={START.x} cy={START.y} r="7" fill="var(--gold)" />
					<foreignObject x={END.x - 18} y={END.y - 33} width="36" height="36">
						<MapPin className="fill-gold text-gold-dark h-9 w-9" strokeWidth={1.5} />
					</foreignObject>
				</svg>
			</div>
		);
	}

	return (
		<div className="mt-2 w-full">
			<svg viewBox="0 0 600 140" className="h-auto w-full overflow-visible" fill="none" aria-hidden="true">
				<defs>
					<linearGradient
						id="routeLineGradient"
						x1={START.x}
						y1={START.y}
						x2={END.x}
						y2={END.y}
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor="var(--gold-dark)" stopOpacity="0.5" />
						<stop offset="55%" stopColor="var(--gold)" />
						<stop offset="100%" stopColor="var(--gold-light)" />
					</linearGradient>
					<filter id="routeLineGlow" x="-80%" y="-80%" width="260%" height="260%">
						<feGaussianBlur stdDeviation="3" result="blur" />
						<feMerge>
							<feMergeNode in="blur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>

				{/* Route path */}
				<motion.path
					d={PATH_D}
					stroke="url(#routeLineGradient)"
					strokeWidth="2"
					strokeDasharray="2 10"
					strokeLinecap="round"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 0.85 }}
					transition={{ duration: 1.1, delay: 0.3, ease: drawEase }}
				/>

				{/* Pickup point — pulses like a live "current location" marker */}
				<motion.circle
					cx={START.x}
					cy={START.y}
					stroke="var(--gold)"
					strokeWidth="1.5"
					fill="none"
					initial={{ r: 7, opacity: 0 }}
					animate={{ r: [7, 26], opacity: [0, 0.45, 0] }}
					transition={{ duration: 1.9, delay: 0.6, repeat: Infinity, repeatDelay: 0.6, ease: 'easeOut' }}
				/>
				<motion.circle
					cx={START.x}
					cy={START.y}
					fill="var(--gold)"
					initial={{ r: 0, opacity: 0 }}
					animate={{ r: 7.5, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.3 }}
				/>

				{/* Destination ping, once the pin has landed */}
				<motion.circle
					cx={END.x}
					cy={END.y}
					stroke="var(--gold)"
					strokeWidth="1.5"
					fill="none"
					initial={{ r: 8, opacity: 0 }}
					animate={{ r: [8, 28], opacity: [0, 0.5, 0] }}
					transition={{ duration: 1.9, delay: 1.1, repeat: Infinity, repeatDelay: 0.7, ease: 'easeOut' }}
				/>

				{/* Destination pin — drops in with a spring bounce */}
				<motion.g
					initial={{ y: -60, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, type: 'spring', stiffness: 340, damping: 11 }}
				>
					<foreignObject x={END.x - 18} y={END.y - 33} width="36" height="36" style={{ overflow: 'visible' }}>
						<div style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.45)) drop-shadow(0 0 6px var(--gold))' }}>
							<MapPin className="fill-gold text-gold-dark h-9 w-9" strokeWidth={1.5} />
						</div>
					</foreignObject>
				</motion.g>

				{/* Car — glides the route on a loop, like a driver en route */}
				<motion.g style={{ x: carX, y: carY, opacity: carOpacity }}>
					<motion.g style={{ rotate: carAngle }}>
						<foreignObject x={-16} y={-16} width="32" height="32" style={{ overflow: 'visible' }}>
							<div style={{ filter: 'drop-shadow(0 0 5px var(--gold))' }}>
								<Car className="text-gold-light h-8 w-8" strokeWidth={2} />
							</div>
						</foreignObject>
					</motion.g>
				</motion.g>
			</svg>
		</div>
	);
}
