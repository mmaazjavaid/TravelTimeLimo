import Image from "next/image"

export default function Testimonials() {
    return (
        <section className="w-full py-8">
            <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* First Testimonial */}
                    <div className="space-y-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/App_Stars.svg"
                                alt="App Store 5 star rating"
                                width={150}
                                height={50}
                                className="h-auto w-auto"
                            />
                        </div>
                        <h3 className="text-xl font-bold">Best car service ever...</h3>
                        <p className="text-gray-600">
                            "Probably the best car service I have experienced ever. Arranged for an airport pick up from LHR to Cambridge and was thoroughly impressed with all aspects of the service."
                        </p>
                    </div>

                    {/* Second Testimonial */}
                    <div className="space-y-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/App_Stars.svg"
                                alt="App Store 5 star rating"
                                width={150}
                                height={50}
                                className="h-auto w-auto"
                            />
                        </div>
                        <h3 className="text-xl font-bold">Dubai &lt;&gt; Abu Dhabi</h3>
                        <p className="text-gray-600">
                            "Amazing service levels. Prompt, courteous, clean and reliable. Went from Dubai to Abu Dhabi and back. [The car] was perfect - smooth as silk."
                        </p>
                    </div>

                    {/* Third Testimonial */}
                    <div className="space-y-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/App_Stars.svg"
                                alt="App Store 5 star rating"
                                width={150}
                                height={50}
                                className="h-auto w-auto"
                            />
                        </div>
                        <h3 className="text-xl font-bold">Icing on the cake</h3>
                        <p className="text-gray-600">
                            "On the day of pick up the driver was on time and waiting at my doorstep. I used them again to pick us up from JFK to take us back home and got the same experience. They get a 5 star rating for me!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

