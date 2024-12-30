import { BookingForm } from "./BookingForm";
import { DownloadSection } from "./DownloadSection";

export default function MainHeader({ heading, showDownloadSection = true, imagePath, showBookingDialog = true }) {
	return (
		<main>
			<div>
				<h1 className="text-3xl mt-20 pl-52 font-bold text-black mb-8">{heading}</h1>
			</div>
			<section className="relative h-[50vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<img src={imagePath} alt="Luxury Car Service" className="w-full h-full object-cover" />
				</div>
				{showBookingDialog ? <div className="container relative bottom-36 left-[800px] z-10 pt-24">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<BookingForm />
						</div>
					</div>
				</div> : null}
			</section>
			{
				showDownloadSection ? <DownloadSection /> : null
			}
		</main>
	)
}