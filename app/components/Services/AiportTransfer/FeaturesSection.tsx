import { Clock, Plane, Receipt } from 'lucide-react'

export default function FeaturesSection() {
    const features = [
        {
            icon: <Receipt className="w-16 h-16 text-[#FF6B6B]" />,
            title: "Competitive rates",
            description:
                "Access premium service at distance-based prices that are fair to you and our chauffeurs.",
        },
        {
            icon: <Plane className="w-16 h-16 text-[#FF6B6B]" />,
            title: "Seamless airport travel",
            description:
                "Relax with 1 hour of complimentary wait time and flight tracking.",
        },
        {
            icon: <Clock className="w-16 h-16 text-[#FF6B6B]" />,
            title: "Travel on your terms",
            description:
                "Stay flexible and in charge of your schedule. It's quick and easy for you to cancel or make changes to any ride.",
        },
    ]

    return (
        <section className="py-16 px-4 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-12 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-muted-foreground max-w-[300px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

