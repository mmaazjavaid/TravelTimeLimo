"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Check } from 'lucide-react'

// Sample data structure
const services = [
    {
        title: "Business Class",
        description: "Cadillac XTS",
        image: "/iStock-2152529144-removebg-preview.png",
        features: [
            "Fits up to 3 people",
            "Fits 2 carry-on bags, or 2 standard check-in, or 1 extra large check-in bag",
            "Available in most of our business districts"
        ]
    },
    {
        title: "Business SUV",
        description: "Chevy Suburban",
        image: "/suburban-variant-black-removebg-preview.png",
        features: [
            "Fits up to 5 people",
            "Fits 12 carry-on bags or 8 standard check-in or 6 extra large check-in bags",
            "Best for larger parties, lots of luggage, or families"
        ]
    },
]

export default function CarService() {
    const [api, setApi] = React.useState<any>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Discover our service classes</h1>
            <Carousel
                setApi={setApi}
                className="w-full overflow-visible"
                opts={{
                    align: "start",
                    dragFree: true,
                }}
            >
                <CarouselContent>
                    {services.map((service, index) => (
                        <CarouselItem key={index} className="md:basis-[45%] lg:basis-[45%] pl-4">
                            <Card className="border rounded-2xl overflow-hidden h-full flex flex-col">
                                <div className="relative bg-gray-200 aspect-[4/3]">
                                    {/* Car Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dot indicators */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        {[1, 2, 3].map((dot) => (
                                            <div
                                                key={dot}
                                                className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-red-500" : "bg-white"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="h-0.5 w-12 bg-red-500 mb-4" />
                                    <ul className="space-y-3 flex-grow">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/3" />
                <CarouselNext className="absolute right-4 top-1/3" />
            </Carousel>
            <div className="flex items-center justify-center gap-2 mt-8">
                <button
                    onClick={() => api?.scrollTo(0)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
                >
                    {"←"}
                </button>
                {[1, 2].map((num) => (
                    <button
                        key={num}
                        onClick={() => api?.scrollTo(num - 1)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${current === num ? "bg-black text-white" : "bg-gray-200"
                            }`}
                    >
                        {num}
                    </button>
                ))}
                <button
                    onClick={() => api?.scrollTo(3)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
                >
                    {"→"}
                </button>
            </div>
        </div>
    )
}

