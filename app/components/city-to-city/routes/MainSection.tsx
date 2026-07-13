import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/motion';

const MainSection: React.FC = () => {
	return (
		<section className="relative w-full">
			<FadeIn className="section-padding pb-8 pt-4 text-center">
				<span className="text-label text-gold">Explore Routes</span>
				<h1 className="text-title mt-3 text-foreground">City-to-City chauffeured ride routes</h1>
				<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
					Discover premium long-distance routes with professional chauffeurs across the United States.
				</p>
			</FadeIn>

			<div className="relative h-[40vh] w-full md:h-[50vh]">
				<Image
					src="/IMG-20240815-WA0045.jpg"
					alt="Black Cadillac Escalade with chauffeur service"
					className="object-cover"
					fill
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
			</div>
		</section>
	);
};

export default MainSection;
