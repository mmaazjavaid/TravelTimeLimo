import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion';

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
			className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
		>
			<div className="relative aspect-[4/3] overflow-hidden">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				{isNew && (
					<span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-gold px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
						New
					</span>
				)}
			</div>
			<div className="flex flex-1 flex-col p-6">
				<h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
				<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
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
		<section className="section-padding bg-surface">
			<div className="section-container space-y-10">
				<FadeIn className="text-center">
					<span className="text-label text-gold-dark">What we offer</span>
					<h2 className="text-title mt-3 text-foreground">Our services</h2>
					<p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
						One trusted partner for every journey — from the airport to across the state.
					</p>
				</FadeIn>

				<StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					<StaggerItem>
						<ServiceCard
							title="City-to-city rides"
							description="Your stress-free solution for long-distance rides with professional chauffeurs across the globe."
							imageSrc="/charleston-black-cab-company (2).jpg"
							redirectUrl="/services/city-city"
						/>
					</StaggerItem>
					<StaggerItem>
						<ServiceCard
							title="Chauffeur hailing"
							description="Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking."
							imageSrc="/02f1f7cfe36b0f5f33652b4561dcfe5c.jpg?height=300&width=400"
							redirectUrl="/services/chauffeur-hailing"
							isNew
						/>
					</StaggerItem>
					<StaggerItem>
						<ServiceCard
							title="Airport transfers"
							description="With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze."
							imageSrc="/CourtneyMac_Design_an_image_featuring_a_luxury_chauffeur-driven_756e7c04-70b8-4f33-ad0f-cf53402e56a6.jpg?height=300&width=400"
							redirectUrl="/services/airport-transfer"
						/>
					</StaggerItem>
					<StaggerItem>
						<ServiceCard
							title="Hourly and full day hire"
							description="For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort."
							imageSrc="/Executive-Hire.avif?height=300&width=400"
							redirectUrl="/services/hourly-car-service"
						/>
					</StaggerItem>
				</StaggerChildren>
			</div>
		</section>
	);
}
