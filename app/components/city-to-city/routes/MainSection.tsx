import React from 'react';
import Image from 'next/image';

const MainSection: React.FC = () => {
	return (
		<section className="relative w-full">
			<div className="mt-8 py-8 text-center">
				<h1 className="md:text-3xl sm:text-2xl font-bold">City-to-City chauffeured ride routes</h1>
			</div>
			{/* Mobile */}
			<div className="relative h-[40vh] md:hidden">
				<Image
					src="/city-to-city-routes-mobile.png"
					alt="Black Cadillac Escalade with chauffeur service"
					className="object-cover"
					fill
					priority
				/>
			</div>

			{/* Desktop */}
			<div className="relative hidden h-[50vh] w-full md:block">
				<Image
					src="/city-to-city-routes-main.png"
					alt="Black Cadillac Escalade with chauffeur service"
					className="object-cover"
					fill
					priority
				/>
			</div>
		</section>
	);
};

export default MainSection;
