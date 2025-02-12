import Image from "next/image"

const journeyTypes = [
    {
        title: "Business trips:",
        description: "Make the most of your business appointments. No need to worry about logistics, wait times, or rushing from one place to the next when you have a day full of meetings, a roadshow, etc."
    },
    {
        title: "Leisure activities:",
        description: "Go sightseeing, shopping, fine dining, in style. It's easy to flit between all your engagements with a private hourly chauffeur service."
    },
    {
        title: "Events:",
        description: "The show's not over until you say so. For big games, premieres, galas, concerts, and more, have your car waiting and you won't have to compete with hundreds of others for a ride home."
    }
]

export function MultiStopJourney() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16 space-y-24">
            {/* Multi-stop Journey Section */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-full">
                    <Image
                        src="https://images.ctfassets.net/ov8o7v78mnye/65tnv3nW9oul6R0h2w0Dt8/f443793967858bf9be8db729d1524ef5/Blacklane-London-Social-14-_3_.jpg?w=1280&fm=webp"
                        alt="Luxury chauffeur service with black car"
                        className="object-cover rounded-lg"
                        fill
                        priority
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        For all your multi-stop journeys
                    </h2>
                    <p className="text-lg text-gray-600">
                        Convenient, comfortable, and flexible. Our hourly chauffeur service is tailored to those occasions when you want a chauffeur on standby.
                    </p>
                    <ul className="space-y-4">
                        {journeyTypes.map((type, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                <div>
                                    <span className="font-semibold">{type.title}</span>{" "}
                                    <span className="text-gray-600">{type.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Global Reach Section */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6 lg:pr-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Global reach
                    </h2>
                    <p className="text-lg text-gray-600">
                        With professional chauffeurs in hundreds of cities spanning{" "}
                        <span className="font-semibold">more than 50 countries</span>, you can make by-the-hour reservations for all your travels. Wherever you go, you can expect the same top-quality experience.
                    </p>
                </div>
                <div className="relative h-[300px] lg:h-[400px]">
                    <Image
                        src="https://images.ctfassets.net/ov8o7v78mnye/2T2z4Oh9PtQDNR7zeUewpE/f8f2db2c39510a0c1f3d42a69e5bcad0/BL_Map__1_.jpg?w=1280&fm=webp"
                        alt="Global coverage map showing Travel Time Limo's presence"
                        className="object-contain"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

