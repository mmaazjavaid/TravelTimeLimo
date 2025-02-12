import Image from "next/image"

const features = [
    {
        title: "Set the itinerary:",
        description: "You decide where and when to go, knowing that your chauffeur is always ready when you are."
    },
    {
        title: "Save time:",
        description: "Win back time by getting dropped off and picked up at the doorstep at every stop of your journey."
    },
    {
        title: "Enjoy peace of mind:",
        description: "Travel in comfort in a premium vehicle, where you can leave personal items during your ride."
    },
    {
        title: "Competitive rates:",
        description: "Your reservation includes 20km of travel per hour booked, as well as all taxes and tolls."
    },
    {
        title: "Reliability:",
        description: "Our chauffeurs are trained to the highest quality and privacy standards."
    },
    {
        title: "Sustainability:",
        description: "Rest assured every ride is carbon offset, no extra cost or opt-in required."
    },
    {
        title: "Wi-Fi available in most cars:",
        description: "Be it a business or a leisure trip, you can make the most of your time in the backseat."
    }
]

export function HourlyPlan() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="space-y-12">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Hourly chauffeur service
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Say goodbye to switching modes of transportation when you need to make journeys with multiple stops. No more waiting for different taxis at different locations, taking crowded public transport, or finding parking for your rental car.
                    </p>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                <div>
                                    <span className="font-semibold">{feature.title}</span>{" "}
                                    <span className="text-gray-600">{feature.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="space-y-2 mb-6">
                        <div className="text-sm font-semibold uppercase tracking-wider text-gray-600">Travel Time Limo</div>
                        <div className="text-2xl font-bold">By-the-hour</div>
                        <div className="text-lg text-gray-600">4h seamless travel</div>
                    </div>

                    <div className="relative">
                        <Image
                            src="https://images.ctfassets.net/ov8o7v78mnye/2ZNFim3IFRBSImhulS4fJe/43170bf8010138f9871bf477f75333bd/ABCD_Landscape_11_Nowhite.jpg"
                            alt="Route diagram showing pickup, multiple stops, and drop off points"
                            width={1200}
                            height={400}
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

