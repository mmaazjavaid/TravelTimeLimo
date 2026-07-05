import { Star } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { DownloadSection } from './DownloadSection';

export default function MainHeader({ heading, showDownloadSection = true, imagePath, showBookingDialog = true }) {
	return (
		<main className="relative">
			<section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
				{/* Background image + cinematic overlay */}
				<div className="absolute inset-0 z-0">
					<img src={imagePath} alt="Luxury chauffeur service" className="h-full w-full object-cover" />
					<div className="hero-overlay absolute inset-0" />
					<div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
				</div>

				<div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
					<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_auto]">
						{/* Copy */}
						<div className="max-w-2xl animate-fade-up">
							<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold">
								<span className="h-px w-8 bg-gold" />
								Chauffeured in Style
							</span>
							<h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
								{heading}
							</h1>
							<p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
								Professional chauffeurs, immaculate premium vehicles, and effortless booking — for airport
								transfers, hourly hire, and city-to-city travel across the US.
							</p>

							{/* Trust markers */}
							<div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
								<div className="flex items-center gap-2">
									<div className="flex text-gold">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="h-4 w-4 fill-current" />
										))}
									</div>
									<span className="text-sm text-white/70">Rated 4.9 by travelers</span>
								</div>
								<div className="h-5 w-px bg-white/20" />
								<span className="text-sm text-white/70">Flight tracking &amp; free wait time</span>
								<div className="h-5 w-px bg-white/20" />
								<span className="text-sm text-white/70">24/7 chauffeur support</span>
							</div>
						</div>

						{/* Booking form */}
						{showBookingDialog && (
							<div className="animate-fade-up lg:justify-self-end">
								<BookingForm />
							</div>
						)}
					</div>
				</div>
			</section>
			{showDownloadSection && <DownloadSection />}
		</main>
	);
}
