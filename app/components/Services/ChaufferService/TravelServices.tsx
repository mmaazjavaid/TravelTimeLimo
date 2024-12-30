import { BanknoteIcon, Plane, Clock } from 'lucide-react'

const features = [
    {
        icon: BanknoteIcon,
        title: "Competitive rates",
        description: "Access premium service at distance-based prices that are fair to you and our chauffeurs."
    },
    {
        icon: Plane,
        title: "Seamless airport travel",
        description: "Relax with 1 hour of complimentary wait time and flight tracking."
    },
    {
        icon: Clock,
        title: "Travel on your terms",
        description: "Stay flexible and in charge of your schedule. It's quick and easy for you to cancel or make changes to any ride."
    }
]

export function TravelFeatures() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-12">
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

