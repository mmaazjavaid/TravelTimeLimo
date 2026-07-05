import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
	title: string;
	description: string;
	imageSrc: string;
	isNew?: boolean;
	redirectUrl: string;
}

function ServiceCard({ title, description, imageSrc, isNew, redirectUrl }: ServiceCardProps) {
	return (
		<Link
			href={redirectUrl}
			className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
		>
			<div className="relative aspect-[4/3] overflow-hidden">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				{isNew && (
					<span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink shadow">
						New
					</span>
				)}
			</div>
			<div className="flex flex-1 flex-col p-6">
				<h3 className="font-display text-xl font-semibold text-gray-900">{title}</h3>
				<p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
				<span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors group-hover:text-gold">
					Learn more
					<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</span>
			</div>
		</Link>
	);
}

export function ServicesSection() {
	return (
		<section className="bg-[#f8f7f4] px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl space-y-16">
				{/* Sustainability Partners */}
				{/* <div className="text-center space-y-8">
					<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Our sustainability partners</h2>
					<div className="flex justify-center items-center gap-8 flex-wrap">
						<Image
							src="/south-pole.svg?height=40&width=120"
							alt="South Pole"
							width={120}
							height={40}
							className="h-10 w-auto"
						/>
						<div className="h-8 w-px bg-gray-300" />
						<Image
							src="/leaders-for-climate-action-logo-black.svg?height=40&width=120"
							alt="Leaders for Climate Action"
							width={120}
							height={40}
							className="h-10 w-auto"
						/>
						<div className="h-8 w-px bg-gray-300" />
						<Image
							src="/the-climate-pledge.svg?height=40&width=120"
							alt="The Climate Pledge"
							width={120}
							height={40}
							className="h-10 w-auto"
						/>
					</div>
				</div> */}

				{/* Services Grid */}
				<div className="space-y-10">
					<div className="text-center">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold-dark">
							<span className="h-px w-8 bg-gold" />
							What we offer
							<span className="h-px w-8 bg-gold" />
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold text-gray-900 sm:text-4xl">Our services</h2>
						<p className="mx-auto mt-3 max-w-2xl text-gray-600">
							One trusted partner for every journey — from the airport to across the state.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ServiceCard
							title="City-to-city rides"
							description="Your stress-free solution for long-distance rides with professional chauffeurs across the globe."
							imageSrc="/charleston-black-cab-company (2).jpg"
							redirectUrl="/services/city-city"
						/>
						<ServiceCard
							title="Chauffeur hailing"
							description="Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking."
							imageSrc="/02f1f7cfe36b0f5f33652b4561dcfe5c.jpg?height=300&width=400"
							redirectUrl="/services/chauffeur-hailing"
							isNew
						/>
						<ServiceCard
							title="Airport transfers"
							description="With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze."
							imageSrc="/CourtneyMac_Design_an_image_featuring_a_luxury_chauffeur-driven_756e7c04-70b8-4f33-ad0f-cf53402e56a6.jpg?height=300&width=400"
							redirectUrl="/services/airport-transfer"
						/>
						<ServiceCard
							title="Hourly and full day hire"
							description="For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort."
							imageSrc="/Executive-Hire.avif?height=300&width=400"
							redirectUrl="/services/hourly-car-service"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
