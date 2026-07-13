import Image from "next/image"
import { Car } from "lucide-react"

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
                    <p className="text-body mb-8 text-muted-foreground">
                        Say goodbye to switching modes of transportation when you need to make journeys with multiple stops. No more waiting for different taxis at different locations, taking crowded public transport, or finding parking for your rental car.
                    </p>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"></span>
                                <div>
                                    <span className="font-semibold">{feature.title}</span>{" "}
                                    <span className="text-muted-foreground">{feature.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>

                    <div className="max-w-7xl mx-auto p-12 space-y-32">
                        <TravelOption
                            type="by-the-hour"
                            title="By-the-hour"
                            duration="4h seamless"
                            stops={[
                                { label: "Pickup" },
                                { label: "Stop 1" },
                                { label: "Stop 2" },
                                { label: "Stop 3", subLabel: "Drop off" },
                            ]}
                        />

                        <TravelOption
                            type="taxi"
                            title="Taxi"
                            duration="5h interrupted"
                            stops={[
                                { label: "Pickup", subLabel: "Wait for Taxi", showTaxi: true },
                                { label: "Stop 1", subLabel: "Wait for Taxi", showTaxi: true },
                                { label: "Stop 2", subLabel: "Wait for Taxi", showTaxi: true },
                                { label: "Stop 3", subLabel: "Wait for Taxi", showTaxi: true },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TravelOption = ({
    type,
    title,
    duration,
    stops,
}: {
    type: "by-the-hour" | "taxi"
    title: string
    duration: string
    stops: {
        label: string
        subLabel?: string
        showTaxi?: boolean
    }[]
}) => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="text-xl text-muted-foreground">{duration} travel</p>
            </div>

            <div className="grid grid-cols-[250px_1fr] gap-12 items-center min-h-[200px]">
                <div className="space-y-6">
                    {type === "by-the-hour" ? (
                        <div className="flex h-14 w-full items-center justify-center rounded-lg bg-surface">
                            <Car className="h-8 w-8 text-black" />
                        </div>
                    ) : null}
                </div>

                <div className="relative py-12">
                    {stops.map((stop, index) => (
                        <div key={index} className="relative mb-24 last:mb-0">
                            <div className="flex items-start">
                                <div className={`mt-2 h-4 w-4 rounded-sm ${type === "by-the-hour" ? "bg-ink" : "bg-ink"}`} />
                                <div className="ml-4">
                                    <div className="font-medium text-xl">{stop.label}</div>
                                    {stop.subLabel && <div className="mt-1 text-lg text-muted-foreground">{stop.subLabel}</div>}
                                    {stop.showTaxi && (
                                        <div className="mt-3 bg-yellow-400 h-10 w-20 rounded flex items-center justify-center">
                                            <Car className="h-6 w-6 text-black" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {index < stops.length - 1 && (
                                <div
                                    className={`absolute left-2 top-6 h-24 w-0.5 ${type === "taxi" ? "bg-gold/40" : "bg-ink"}`}
                                />
                            )}
                            {index === 1 && type === "by-the-hour" && (
                                <div className="absolute left-2 top-6 h-48 w-64 rounded-br-[64px] border-b-2 border-r-2 border-ink" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}