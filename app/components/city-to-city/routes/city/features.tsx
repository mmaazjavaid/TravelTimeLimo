import { Globe, User, MapPin } from 'lucide-react';

export function Features() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="flex flex-col items-center text-center space-y-4">
						<div className="mb-6 p-6 bg-[#f5f5f5] rounded-full">
							<User className="w-8 h-8 text-black" />
						</div>
						<h3 className="text-xl font-bold text-black">Professional chauffeurs</h3>
						<p className="text-gray-600 max-w-[300px] leading-relaxed">
							Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion,
							and more.
						</p>
					</div>
					<div className="flex flex-col items-center text-center space-y-4">
						<div className="mb-6 p-6 bg-[#f5f5f5] rounded-full">
							<MapPin className="w-8 h-8 text-black" />
						</div>
						<h3 className="text-xl font-bold text-black">Door-to-door convenience</h3>
						<p className="text-gray-600 max-w-[300px] leading-relaxed">
							Rest easy with door-to-door pickup and drop-off: no waiting in lines or change of transportation needed.
						</p>
					</div>
					<div className="flex flex-col items-center text-center space-y-4">
						<div className="mb-6 p-6 bg-[#f5f5f5] rounded-full">
							<Globe className="w-8 h-8 text-black" />
						</div>
						<h3 className="text-xl font-bold text-black">Global quality, local experts</h3>
						<p className="text-gray-600 max-w-[300px] leading-relaxed">
							Enjoy world class luxury and professionalism alongside local knowledge. Your chauffeur is here to help you
							make the most of your journey.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

