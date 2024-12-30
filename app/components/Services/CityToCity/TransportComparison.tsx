import Image from "next/image"
import Link from "next/link"

export default function TransportComparison() {
    return (
        <>
            <section className="w-full py-12 md:py-24">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        {/* Image Section */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/CTC_Time_COPY__1_.webp"
                                alt="Transport comparison diagram showing airplane, train, and car journey times"
                                width={800}
                                height={600}
                                className="rounded-lg object-cover"
                                priority
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Long distance car service, the better way between cities
                            </h2>
                            <p className="text-gray-500 md:text-lg">
                                Say goodbye to the stress of short-haul flights, regional trains, or car rentals, and hello to
                                the comfort and simplicity of chauffeured rides with our City-to-City private transportation
                                service. Here are just a few of the reasons why our service is{" "}
                                <span className="font-semibold">an excellent alternative to flying</span> and other means of
                                transport:
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <h3 className="font-semibold">Save time:</h3>
                                    <p className="text-gray-500">
                                        Door-to-door rides mean no waiting in lines or switching between modes of transportation.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Set the schedule:</h3>
                                    <p className="text-gray-500">
                                        You choose the pickup time, plus you can cancel up until 1 hour before your ride.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Enjoy peace of mind:</h3>
                                    <p className="text-gray-500">
                                        Travel in comfort in a premium vehicle, and rest assured every ride is carbon offset.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Competitive rates:</h3>
                                    <p className="text-gray-500">
                                        Taxes and tolls are included, you pay per car instead of per seat, and the only luggage
                                        limit is trunk space.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Reliable pickups:</h3>
                                    <p className="text-gray-500">
                                        With long distance car service you don't have to worry about strikes, short-staffing, or
                                        crowds.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="font-semibold">Work while en route:</h3>
                                    <p className="text-gray-500">
                                        On a business trip? Work comfortably from the back seat, with Wi-Fi available for most
                                        locations.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Map Image - Removed aspect ratio constraint to align with text */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/CTC_Map_Updated.webp"
                                alt="World map showing Blacklane's global reach across multiple countries"
                                className="object-contain w-full"
                                width={800}
                                height={600}
                                priority
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Global reach
                            </h2>
                            <p className="text-lg text-gray-600">
                                With over 180 routes across Australia, Austria, Canada, China, France, Ireland, Japan, Luxembourg, Malaysia, the Netherlands, New Zealand, Poland, Saudi Arabia, Singapore, South Africa, Spain, Sweden, Switzerland, Taiwan, Thailand, Turkiye, the United Arab Emirates, the United Kingdom, and the United States, long distance travel is easier than ever with a reliable chauffeur service. Plus, you can count on the same fantastic service whether you're going from{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    New York to the Hamptons
                                </Link>
                                ,{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    London to Oxford
                                </Link>
                                , or{" "}
                                <Link href="#" className="underline decoration-2 font-medium">
                                    Dubai to Abu Dhabi
                                </Link>
                                .
                            </p>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-600">
                                    Planning your next ski trip?{" "}
                                    <Link href="#" className="underline decoration-2 font-medium">
                                        Check out our City-to-Slopes
                                    </Link>{" "}
                                    offering for all your ski season transport needs.
                                </p>

                                <p className="text-lg text-gray-600">
                                    Or maybe sandy beaches are on your mind?{" "}
                                    <Link href="#" className="underline decoration-2 font-medium">
                                        Check out our City-to-Beach
                                    </Link>{" "}
                                    offering for all your beach getaway transport needs.
                                </p>

                                <p className="text-lg text-gray-600">
                                    Teeing off? Check out our{" "}
                                    <Link href="#" className="underline decoration-2 font-medium">
                                        City-to-Golf transfers
                                    </Link>{" "}
                                    and discover premium rides for the world's best courses.
                                </p>

                                <p className="text-lg text-gray-600">
                                    Explore some of the most famous wine regions in the world with Blacklane's new{" "}
                                    <Link href="#" className="underline decoration-2 font-medium">
                                        City-to-Vineyard service
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
