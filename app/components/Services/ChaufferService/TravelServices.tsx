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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

