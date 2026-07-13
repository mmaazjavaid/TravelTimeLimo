'use client';

import { useRef } from 'react';
import { Car, Leaf, Shield, type LucideIcon } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion';
import { gsap, useGSAP } from '@/lib/gsap';

const features = [
	{
		icon: Shield,
		title: 'Safety first',
		description:
			'Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service.',
	},
	{
		icon: Car,
		title: 'Private travel solutions',
		description:
			'Your one-stop travel shop: long-distance rides, one way or return, by the hour, airport transfers, and more.',
	},
	{
		icon: Leaf,
		title: 'Sustainable travel',
		description:
			"Breathe easy knowing all ride emissions are offset, as part of our global carbon offset program — the industry's first.",
	},
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
	const ref = useRef<HTMLDivElement>(null);

	useGSAP(
		(_context, contextSafe) => {
			const el = ref.current;
			if (!el || !contextSafe) return;

			const onEnter = contextSafe(() => {
				gsap.to(el, { rotate: -8, scale: 1.08, duration: 0.35, ease: 'back.out(2)' });
			});
			const onLeave = contextSafe(() => {
				gsap.to(el, { rotate: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
			});

			el.addEventListener('mouseenter', onEnter);
			el.addEventListener('mouseleave', onLeave);
			return () => {
				el.removeEventListener('mouseenter', onEnter);
				el.removeEventListener('mouseleave', onLeave);
			};
		},
		{ scope: ref }
	);

	return (
		<div ref={ref} className="mb-6 rounded-2xl border border-white/10 bg-ink-soft p-5">
			<Icon className="h-10 w-10 text-gold" strokeWidth={1.5} />
		</div>
	);
}

export function FeaturesSection() {
	return (
		<section className="section-padding bg-ink text-white">
			<div className="section-container">
				<FadeIn className="mb-16 text-center md:mb-20">
					<span className="text-label text-gold">Why Travel Time Limo</span>
					<h2 className="text-title mt-3 text-white">The standard in premium travel</h2>
				</FadeIn>

				<StaggerChildren className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
					{features.map(feature => (
						<StaggerItem key={feature.title}>
							<div className="flex flex-col items-center text-center">
								<IconBadge icon={feature.icon} />
								<h3 className="mb-3 font-display text-xl font-semibold">{feature.title}</h3>
								<p className="max-w-sm leading-relaxed text-white/65">{feature.description}</p>
							</div>
						</StaggerItem>
					))}
				</StaggerChildren>

				<FadeIn delay={0.2}>
					<div className="mx-auto max-w-4xl space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:p-14">
						<div className="mx-auto flex justify-center text-gold">
							<span className="font-display text-5xl leading-none md:text-6xl">&ldquo;</span>
						</div>
						<blockquote className="mx-auto -mt-4 max-w-3xl font-display text-xl font-medium leading-snug text-white/90 md:text-2xl">
							Experience a premium chauffeur service — your refined alternative to ride-hailing for every city journey.
						</blockquote>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
