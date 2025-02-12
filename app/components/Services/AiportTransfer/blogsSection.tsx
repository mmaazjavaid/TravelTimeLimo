import Image from "next/image"
import Link from "next/link"

export function BlogsSection() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="w-full max-w-6xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Airport transfer in global cities
                        </h1>
                        <p className="text-lg text-gray-600">
                            If you've just stepped off a plane, tired and aching from a long flight, there can be no better stress-reliever than a Travel time limo airport transfer direct to your destination. Travel time Limo transfers are available in{" "}
                            <span className="underline decoration-2">hundreds of cities</span> and airports across the world, and for those who don't look forward to deciphering foreign public transport maps or haggling with local taxi companies, Travel time Limo offers a service that will take you to your destination directly from the airport.
                        </p>
                        <p className="text-lg text-gray-600">
                            Wherever you go, our professional drivers can track your flight and adjust for any delays outside of your control. They're hand-picked and locally knowledgeable, so feel free to ask them for tips or advice on what to do during your stay.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                            src="/01_AT_City.webp"
                            alt="Professional driver helping a passenger into a luxury vehicle"
                            className="object-cover"
                            fill
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Airport Service Section */}
            <section className="w-full max-w-6xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                            src="/02_Get_to.webp"
                            alt="Chauffeur loading luggage into a luxury car"
                            className="object-cover"
                            fill
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Get to or from the airport
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                                <Link href="#" className="underline decoration-2 font-medium">
                                    A Travel time Limo chauffeur service
                                </Link>{" "}
                                aims to achieve the very highest possible standards possible for all its passengers. Whether you're stepping out of{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    LAX in California
                                </Link>{" "}
                                on business or you need to be dropped off at{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    Bangkok International Airport
                                </Link>{" "}
                                after a holiday in Thailand, Travel time Limo will get you there relaxed, recharged and ready with an airport pick up or transfer taxi service.
                            </p>
                            <p className="text-lg text-gray-600">
                                Traveling from airports to your hotel with family or colleagues? A Travel time Limo Business Van can be shared by up to five people together, with plenty of room for luggage. For those after that little bit extra, consider our First Class service for the epitome of style and comfort - a great idea for special occasions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="w-full max-w-6xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Airport shuttle booking
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600">
                                The booking of{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    Travel time Limo's limousine service
                                </Link>{" "}
                                is easy and requires just a few seconds. You can reserve your airport transfer in a city of your choice using the accessible Travel time Limo website, or use the smartphone app for Apple and Android devices.
                            </p>
                            <p className="text-lg text-gray-600">
                                The necessary steps are simple: just provide the pickup and destination data and select your shuttle's vehicle class. After you've confirmed the calculated fare and payment details, you will receive an email of confirmation shortly afterwards.
                            </p>
                            <p className="text-lg text-gray-600">
                                Travel time Limo prides itself on transparency, which is why you won't receive any hidden fees when you book with us and the price you see is the price you pay - a great way to kick off your journey.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                            src="/03_Shuttle.webp"
                            alt="Passengers waiting by a luxury vehicle"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

