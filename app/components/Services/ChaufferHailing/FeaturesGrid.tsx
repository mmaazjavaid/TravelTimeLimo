import { Smartphone, Car, Award, User, Shield, DollarSign } from 'lucide-react'

const features = [
    {
        icon: Smartphone,
        title: "Convenience",
        description: "Get a door-to-door chauffeured ride right when you need with just a few taps in the Blacklane app."
    },
    {
        icon: Car,
        title: "Comfort",
        description: "A private ride in a top-of-the-line vehicle makes every journey a pleasure, not just a means to an end."
    },
    {
        icon: Award,
        title: "Quality",
        description: "Making your experience excellent is our top priority. Enjoy the next-level service you deserve for all your travels."
    },
    {
        icon: User,
        title: "Professional chauffeurs",
        description: "Travel confidently with expert chauffeurs delivering industry-leading quality, reliability, discretion, and more."
    },
    {
        icon: Shield,
        title: "Reliability",
        description: "Book with certainty, then stay in the know with real-time ride status updates and chauffeur location tracking."
    },
    {
        icon: DollarSign,
        title: "Competitive rates",
        description: "Access premium service at distance-based prices that are fair to you and our chauffeurs."
    }
]

export function FeaturesGrid() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-6">
                            <feature.icon className="w-12 h-12 text-red-400 stroke-[1.5]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

