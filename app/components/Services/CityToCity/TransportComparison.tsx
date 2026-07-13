import Image from 'next/image';
import { Car, Clock, Plane, Train } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';

const TransportOption = ({
	type,
	title,
	subtitle,
	totalTime,
	steps,
	vehicleTypeImage,
	icon: Icon,
}: {
	type: 'airplane' | 'train' | 'car';
	title: string;
	subtitle: string;
	totalTime: string;
	steps: { label: string; duration: string }[];
	vehicleTypeImage: string;
	icon: React.ComponentType<{ className?: string }>;
}) => {
	return (
		<div className="relative grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-border/60 bg-surface shadow-soft md:grid-cols-[300px_1fr]">
			<div className="relative h-48 md:h-auto">
				<Image src={`/${vehicleTypeImage}`} alt={title} fill className="object-cover object-center" priority />
				<div className="absolute bottom-0 left-0 rounded-tr-xl bg-white/95 p-4 backdrop-blur-sm">
					<div className="flex items-center gap-2">
						<Icon className="h-5 w-5 text-gold-dark" />
						<div>
							<h3 className="font-semibold text-foreground">{title}</h3>
							<p className="text-sm text-muted-foreground">{subtitle}</p>
						</div>
					</div>
					<div className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-white">
						<Clock className="h-4 w-4 text-gold" />
						<span className="text-sm font-medium">{totalTime}</span>
					</div>
				</div>
			</div>

			<div className="p-6 md:py-8">
				{type === 'car' ? (
					<div className="relative px-8 py-4">
						<div className="flex items-center justify-between">
							<div className="font-medium text-foreground">DOOR</div>
							<div className="font-medium text-foreground">DOOR</div>
						</div>
						<div className="absolute left-8 right-8 top-1/2 h-0.5 bg-gold" />
						<div className="absolute left-8 top-1/2 h-4 w-4 -translate-x-2 -translate-y-2 rounded-full border-4 border-white bg-gold" />
						<div className="absolute right-8 top-1/2 h-4 w-4 translate-x-2 -translate-y-2 rounded-full border-4 border-white bg-gold" />
						<div className="mt-8 text-center font-medium text-gold-dark">ENJOY THE RIDE</div>
					</div>
				) : (
					<div className="relative px-8">
						<div className="grid gap-12">
							{steps.map((step, index) => (
								<div key={index} className="relative flex items-center">
									<div className="absolute left-0 h-4 w-4 rounded-full border-4 border-white bg-gold" />
									<div className="ml-8 flex flex-grow items-center justify-between">
										<div className="font-medium text-foreground">{step.label}</div>
										<div className="text-sm text-gold-dark">{step.duration}</div>
									</div>
									{index < steps.length - 1 && <div className="absolute left-2 top-4 h-16 w-0.5 bg-gold/40" />}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default function TransportComparison() {
	return (
		<div className="section-container max-w-5xl space-y-6 p-4">
			<FadeIn>
				<TransportOption
					type="airplane"
					title="Airplane"
					subtitle="Short flights"
					totalTime="TOTAL TIME: over 5 hours"
					vehicleTypeImage="photo-1559268950-2d7ceb2efa3a.jpeg"
					icon={Plane}
					steps={[
						{ label: 'DOOR', duration: '' },
						{ label: 'RIDE TO AIRPORT', duration: '45min' },
						{ label: 'CHECK-IN AND SECURITY', duration: '2h' },
						{ label: 'FLIGHT', duration: '1h' },
						{ label: 'OFFBOARDING AND BAGGAGE COLLECTION', duration: '45min' },
						{ label: 'RIDE TO DESTINATION', duration: '45min' },
						{ label: 'DOOR', duration: '' },
					]}
				/>
			</FadeIn>
			<FadeIn delay={0.1}>
				<TransportOption
					type="train"
					title="Train"
					subtitle="Journeys"
					totalTime="TOTAL TIME: up to 5 hours"
					vehicleTypeImage="photo-1580442374555-3def8fb41738.jpeg"
					icon={Train}
					steps={[
						{ label: 'DOOR', duration: '' },
						{ label: 'RIDE TO STATION', duration: '45min' },
						{ label: 'BOARDING', duration: '30min' },
						{ label: 'JOURNEY', duration: '3h' },
						{ label: 'OFFBOARDING', duration: '30min' },
						{ label: 'RIDE TO DESTINATION', duration: '45min' },
						{ label: 'DOOR', duration: '' },
					]}
				/>
			</FadeIn>
			<FadeIn delay={0.2}>
				<TransportOption
					type="car"
					title="Travel Time Limo"
					subtitle="City to City rides"
					totalTime="TOTAL TIME: 4h"
					vehicleTypeImage="PHOTO-2023-03-16-07-40-46.jpg"
					icon={Car}
					steps={[]}
				/>
			</FadeIn>
		</div>
	);
}
