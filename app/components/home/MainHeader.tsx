'use client';

import { useRef } from 'react';
import { Star } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { DownloadSection } from './DownloadSection';
import { RouteLine } from './RouteLine';
import { gsap, useGSAP } from '@/lib/gsap';

export default function MainHeader({ heading, showDownloadSection = true, imagePath, showBookingDialog = true }) {
	const sectionRef = useRef(null);
	const imageRef = useRef(null);

	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add('(prefers-reduced-motion: no-preference)', () => {
				const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

				tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
					.from('.hero-heading', { opacity: 0, y: 28, duration: 0.8 }, '-=0.4')
					.from('.hero-copy', { opacity: 0, y: 20, duration: 0.6 }, '-=0.5')
					.from('.hero-trust > *', { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, '-=0.35')
					.from('.hero-booking', { opacity: 0, y: 24, scale: 0.98, duration: 0.7 }, '-=0.5');

				// Subtle parallax on the hero image as the section scrolls out of view
				gsap.to(imageRef.current, {
					yPercent: 12,
					ease: 'none',
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top top',
						end: 'bottom top',
						scrub: true,
					},
				});

				return () => tl.kill();
			});

			mm.add('(prefers-reduced-motion: reduce)', () => {
				gsap.set(['.hero-eyebrow', '.hero-heading', '.hero-copy', '.hero-trust > *', '.hero-booking'], {
					opacity: 1,
					y: 0,
					scale: 1,
				});
			});

			return () => mm.revert();
		},
		{ scope: sectionRef }
	);

	return (
		<>
			<section ref={sectionRef} className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden">
				{/* Background image + cinematic overlay */}
				<div className="absolute inset-0 z-0">
					<img
						ref={imageRef}
						src={imagePath}
						alt="Luxury chauffeur service"
						className="h-full w-full scale-110 object-cover"
					/>
					<div className="hero-overlay absolute inset-0" />
					<div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
				</div>

				<div className="section-container relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_auto]">
						{/* Copy */}
						<div className="max-w-2xl">
							<span className="hero-eyebrow text-label text-gold">Chauffeured in Style</span>
							<h1 className="hero-heading text-display mt-4 text-white">{heading}</h1>
							<p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
								Professional chauffeurs, immaculate premium vehicles, and effortless booking — for airport
								transfers, hourly hire, and city-to-city travel across the US.
							</p>

							{/* Trust markers */}
							<div className="hero-trust mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
								<div className="flex items-center gap-2">
									<div className="flex text-gold">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-current" />
										))}
									</div>
									<span className="text-sm text-white/70">Rated 4.9 by travelers</span>
								</div>
								<span className="hidden h-4 w-px bg-white/20 sm:block" />
								<span className="text-sm text-white/70">Flight tracking &amp; free wait time</span>
								<span className="hidden h-4 w-px bg-white/20 sm:block" />
								<span className="text-sm text-white/70">24/7 chauffeur support</span>
							</div>

							{/* Live trip tracker — a premium, always-visible motion accent */}
							<RouteLine />
						</div>

						{/* Booking form */}
						{showBookingDialog && (
							<div className="hero-booking relative z-20 lg:justify-self-end">
								<BookingForm />
							</div>
						)}
					</div>
				</div>
			</section>
			{showDownloadSection && <DownloadSection />}
		</>
	);
}
