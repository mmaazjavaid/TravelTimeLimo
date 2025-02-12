import { Smartphone, Car, Award, User, Shield, DollarSign } from 'lucide-react'

const features = [
    {
        icon: Smartphone,
        title: "Convenience",
        description: "Get a door-to-door chauffeured ride right when you need with just a few taps in the Travel time Limo app."
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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="mb-6 p-6 bg-[#f5f5f5] rounded-full">
                                <feature.icon className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-black">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 max-w-[300px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

