import { BookingForm } from './BookingForm';
import { DownloadSection } from './DownloadSection';

export default function MainHeader({ heading, showDownloadSection = true, imagePath, showBookingDialog = true }) {
	return (
		<main className="relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 pt-24 lg:pt-28">{heading}</h1>
			</div>
			<section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<img src={imagePath} alt="Luxury Car Service" className="w-full h-full object-cover" />
				</div>
				{showBookingDialog && (
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50 py-8 lg:py-12">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
							<div className="lg:w-1/2 xl:w-5/12">
								<BookingForm />
							</div>
						</div>
					</div>
				)}
			</section>
			{showDownloadSection && <DownloadSection />}
		</main>
	);
}
