import Image from "next/image"
import { Car, Clock, Plane, Train } from "lucide-react"

const TransportOption = ({
    type,
    title,
    subtitle,
    totalTime,
    steps,
    vehicleTypeImage,
    icon: Icon,
}: {
    type: "airplane" | "train" | "car"
    title: string
    subtitle: string
    totalTime: string
    steps: { label: string; duration: string }[]
    vehicleTypeImage: string
    icon: any
}) => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 bg-gray-100 rounded-lg overflow-hidden">
            <div className="relative h-48 md:h-auto">
                <Image
                    src={`/${vehicleTypeImage}`}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute bottom-0 left-0 p-4 bg-white/90 rounded-tr-lg">
                    <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-red-500" />
                        <div>
                            <h3 className="font-semibold">{title}</h3>
                            <p className="text-sm text-gray-600">{subtitle}</p>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded w-fit">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{totalTime}</span>
                    </div>
                </div>
            </div>

            <div className="p-4 md:py-8">
                {type === "car" ? (
                    <div className="relative px-8 py-4">
                        <div className="flex justify-between items-center">
                            <div className="font-medium">DOOR</div>
                            <div className="font-medium">DOOR</div>
                        </div>
                        <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-red-500" />
                        <div className="absolute top-1/2 left-8 w-4 h-4 rounded-full bg-red-500 -translate-x-2 -translate-y-2 border-4 border-white" />
                        <div className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-red-500 translate-x-2 -translate-y-2 border-4 border-white" />
                        <div className="text-center text-red-500 font-medium mt-8">ENJOY THE RIDE</div>
                    </div>
                ) : (
                    <div className="relative px-8">
                        <div className="grid gap-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex items-center">
                                    <div className="absolute left-0 w-4 h-4 rounded-full bg-red-500 border-4 border-white" />
                                    <div className="ml-8 flex-grow flex justify-between items-center">
                                        <div className="font-medium">{step.label}</div>
                                        <div className="text-red-500 text-sm">{step.duration}</div>
                                    </div>
                                    {index < steps.length - 1 && <div className="absolute top-4 left-2 w-0.5 h-16 bg-red-500" />}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function TransportComparison() {
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">
            <TransportOption
                type="airplane"
                title="Airplane"
                subtitle="Short flights"
                totalTime="TOTAL TIME: over 5 hours"
                vehicleTypeImage="photo-1559268950-2d7ceb2efa3a.jpeg"
                icon={Plane}
                steps={[
                    { label: "DOOR", duration: "" },
                    { label: "RIDE TO AIRPORT", duration: "45min" },
                    { label: "CHECK-IN AND SECURITY", duration: "2h" },
                    { label: "FLIGHT", duration: "1h" },
                    { label: "OFFBOARDING AND BAGGAGE COLLECTION", duration: "45min" },
                    { label: "RIDE TO DESTINATION", duration: "45min" },
                    { label: "DOOR", duration: "" },
                ]}
            />

            <TransportOption
                type="train"
                title="Train"
                subtitle="Journeys"
                totalTime="TOTAL TIME: up to 5 hours"
                vehicleTypeImage="photo-1580442374555-3def8fb41738.jpeg"
                icon={Train}
                steps={[
                    { label: "DOOR", duration: "" },
                    { label: "RIDE TO STATION", duration: "45min" },
                    { label: "BOARDING", duration: "30min" },
                    { label: "JOURNEY", duration: "3h" },
                    { label: "OFFBOARDING", duration: "30min" },
                    { label: "RIDE TO DESTINATION", duration: "45min" },
                    { label: "DOOR", duration: "" },
                ]}
            />

            <TransportOption
                type="car"
                title="Blacklane"
                subtitle="City to City rides"
                totalTime="TOTAL TIME: 4h"
                vehicleTypeImage="PHOTO-2023-03-16-07-40-46.jpg"
                icon={Car}
                steps={[]}
            />
        </div>
    )
}

