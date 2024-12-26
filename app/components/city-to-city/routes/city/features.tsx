import { Globe, User, MapPin } from 'lucide-react';

export function Features() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-7xl px-4">
				<div className="grid gap-8 md:grid-cols-3">
					<div className="text-center">
						<User className="mx-auto mb-4 h-12 w-12 text-[#FF4436]" />
						<h3 className="mb-2 text-xl font-semibold">Professional chauffeurs</h3>
						<p className="text-gray-600">
							Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion,
							and more.
						</p>
					</div>
					<div className="text-center">
						<MapPin className="mx-auto mb-4 h-12 w-12 text-[#FF4436]" />
						<h3 className="mb-2 text-xl font-semibold">Door-to-door convenience</h3>
						<p className="text-gray-600">
							Rest easy with door-to-door pickup and drop-off: no waiting in lines or change of transportation needed.
						</p>
					</div>
					<div className="text-center">
						<Globe className="mx-auto mb-4 h-12 w-12 text-[#FF4436]" />
						<h3 className="mb-2 text-xl font-semibold">Global quality, local experts</h3>
						<p className="text-gray-600">
							Enjoy world class luxury and professionalism alongside local knowledge. Your chauffeur is here to help you
							make the most of your journey.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
