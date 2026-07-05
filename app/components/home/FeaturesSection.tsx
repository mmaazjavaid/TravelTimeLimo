import { Car, Leaf, Shield } from 'lucide-react';

const features = [
	{
		icon: Shield,
		title: 'Safety first',
		description:
			'Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service.',
	},
	{
		icon: Car,
		title: 'Private travel solutions',
		description:
			'Your one-stop travel shop: long-distance rides, one way or return, by the hour, airport transfers, and more.',
	},
	{
		icon: Leaf,
		title: 'Sustainable travel',
		description:
			"Breathe easy knowing all ride emissions are offset, as part of our global carbon offset program — the industry's first.",
	},
];

export function FeaturesSection() {
	return (
		<div className="bg-ink text-white">
			<div className="container mx-auto px-4 py-24 md:py-28">
				<div className="mb-20 text-center">
					<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxe text-gold">
						<span className="h-px w-8 bg-gold" />
						Why Travel Time Limo
						<span className="h-px w-8 bg-gold" />
					</span>
					<h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">The standard in premium travel</h2>
				</div>

				{/* Features Grid */}
				<div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-3">
					{features.map(feature => (
						<div key={feature.title} className="flex flex-col items-center text-center">
							<div className="mb-8 rounded-full border border-gold/30 bg-gold/10 p-6">
								<feature.icon className="h-12 w-12 text-gold" strokeWidth={1.5} />
							</div>
							<h3 className="mb-4 font-display text-2xl font-semibold">{feature.title}</h3>
							<p className="max-w-sm leading-relaxed text-white/70">{feature.description}</p>
						</div>
					))}
				</div>

				{/* Quote Section */}
				<div className="mx-auto max-w-4xl space-y-6 rounded-2xl border border-gold/20 bg-white/5 p-10 text-center md:p-14">
					<div className="mx-auto flex justify-center text-gold">
						<span className="font-display text-6xl leading-none">&ldquo;</span>
					</div>
					<blockquote className="mx-auto -mt-6 max-w-3xl font-display text-2xl font-medium leading-snug md:text-3xl">
						Experience a premium chauffeur service — your refined alternative to ride-hailing for every city journey.
					</blockquote>
				</div>
			</div>
		</div>
	);
}
