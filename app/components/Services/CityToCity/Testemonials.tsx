import Image from 'next/image';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/motion';

const testimonials = [
	{
		title: 'Best car service ever...',
		quote:
			'"Probably the best car service I have experienced ever. Arranged for an airport pick up from LHR to Cambridge and was thoroughly impressed with all aspects of the service."',
	},
	{
		title: 'Dubai <> Abu Dhabi',
		quote:
			'"Amazing service levels. Prompt, courteous, clean and reliable. Went from Dubai to Abu Dhabi and back. [The car] was perfect - smooth as silk."',
	},
	{
		title: 'Icing on the cake',
		quote:
			'"On the day of pick up the driver was on time and waiting at my doorstep. I used them again to pick us up from JFK to take us back home and got the same experience. They get a 5 star rating for me!"',
	},
];

export default function Testimonials() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<StaggerChildren className="grid gap-10 md:grid-cols-3">
					{testimonials.map(item => (
						<StaggerItem key={item.title}>
							<div className="space-y-4 rounded-2xl border border-border/60 bg-surface p-6 text-center shadow-soft">
								<div className="flex justify-center">
									<Image src="/App_Stars.svg" alt="5 star rating" width={150} height={50} className="h-auto w-auto" />
								</div>
								<h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
							</div>
						</StaggerItem>
					))}
				</StaggerChildren>
			</div>
		</section>
	);
}
