import { BookingForm } from './BookingForm';
import { DownloadSection } from './DownloadSection';

export default function MainHeader({ heading, showDownloadSection = true, imagePath, showBookingDialog = true }) {
	return (
		<main className="relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 pt-20">{heading}</h1>
			</div>
			<section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[75vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<img src={imagePath} alt="Luxury Car Service" className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-black opacity-30"></div>
				</div>
				{showBookingDialog && (
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-12">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-end xl:relative xl:-top-[100px] xl:-right-[100px]">
							<div>
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
