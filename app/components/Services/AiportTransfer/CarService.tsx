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
        <div className="section-container section-padding">
            <h1 className="text-title mb-8 text-foreground">Discover our service classes</h1>
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
                            <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-border/60 shadow-soft">
                                <div className="relative aspect-[4/3] bg-surface">
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
                                                className={`h-2 w-2 rounded-full ${dot === 1 ? 'bg-gold' : 'bg-white/60'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h2 className="mb-2 font-display text-2xl font-semibold">{service.title}</h2>
                                    <p className="mb-4 text-muted-foreground">{service.description}</p>
                                    <div className="mb-4 h-0.5 w-12 bg-gold" />
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
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-gold/20"
                >
                    {"←"}
                </button>
                {[1, 2].map((num) => (
                    <button
                        key={num}
                        onClick={() => api?.scrollTo(num - 1)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${current === num ? 'bg-ink text-white' : 'bg-secondary hover:bg-gold/20'}`}
                    >
                        {num}
                    </button>
                ))}
                <button
                    onClick={() => api?.scrollTo(3)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-gold/20"
                >
                    {"→"}
                </button>
            </div>
        </div>
    )
}

