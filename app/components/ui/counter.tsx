'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

interface CounterProps {
	value: number;
	suffix?: string;
	className?: string;
}

export function Counter({ value, suffix = '', className }: CounterProps) {
	const ref = useRef<HTMLSpanElement>(null);

	useGSAP(
		() => {
			const el = ref.current;
			if (!el) return;
			const counter = { val: 0 };

			gsap.to(counter, {
				val: value,
				duration: 1.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					once: true,
				},
				onUpdate: () => {
					el.textContent = `${Math.round(counter.val)}${suffix}`;
				},
			});
		},
		{ scope: ref, dependencies: [value, suffix] }
	);

	return (
		<span ref={ref} className={className}>
			0{suffix}
		</span>
	);
}
