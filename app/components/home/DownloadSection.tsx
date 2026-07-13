import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function DownloadSection() {
	return (
		<section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
			<div className="absolute inset-0 z-0 opacity-10 grayscale sepia">
				<Image
					src="https://images.ctfassets.net/ov8o7v78mnye/6JTwhj2JHkJqdyGKQqeCW0/1c365adecbf39ae640d66a8ed557f04e/BackgroundDesktop.svg"
					alt=""
					fill
					className="object-cover"
					aria-hidden
				/>
			</div>
			<div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
				<FadeIn className="max-w-2xl">
					<span className="text-label text-gold">Mobile App</span>
					<h2 className="text-title mt-3 text-white">Chauffeurs at your fingertips</h2>
					<p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
						Download the Travel Time Limo app to easily book safe, private rides while you&apos;re on the go.
					</p>
					<div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
						<div className="rounded-xl bg-white p-3 shadow-lift">
							<Image src="/app_qrcode.svg" alt="QR Code to download app" width={120} height={120} />
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<Button variant="secondary" className="h-12 bg-white px-4 hover:bg-white/90">
								<Image
									src="/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
									alt="Download on the App Store"
									width={120}
									height={40}
									className="h-8 w-auto"
								/>
							</Button>
							<Button variant="secondary" className="h-12 bg-white px-4 hover:bg-white/90">
								<Image
									src="/png-clipart-google-play-text-google-play-android-app-store-google-play-text-logo.png"
									alt="Get it on Google Play"
									width={120}
									height={40}
									className="h-8 w-auto"
								/>
							</Button>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
