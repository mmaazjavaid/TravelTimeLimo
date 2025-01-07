import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
    title: string
    description: string
    imageSrc: string
    isNew?: boolean
}

function ServiceCard({ title, description, imageSrc, isNew }: ServiceCardProps) {
    return (
        <div className="flex flex-col space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    {isNew && (
                        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            NEW
                        </span>
                    )}
                </div>
                <p className="text-gray-600">{description}</p>
                <Link
                    href="#"
                    className="inline-block text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600"
                >
                    Learn more
                </Link>
            </div>
        </div>
    )
}

export function ServicesSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Sustainability Partners */}
                <div className="text-center space-y-8">
                    <h2 className="text-lg font-semibold tracking-tight text-gray-900 uppercase">
                        Click to learn more about our sustainability partners
                    </h2>
                    <div className="flex justify-center items-center gap-8">
                        <Image
                            src="/south-pole.svg?height=40&width=120"
                            alt="South Pole"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                        <div className="h-8 w-px bg-gray-200" />
                        <Image
                            src="/leaders-for-climate-action-logo-black.svg?height=40&width=120"
                            alt="Leaders for Climate Action"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                        <div className="h-8 w-px bg-gray-200" />
                        <Image
                            src="/the-climate-pledge.svg?height=40&width=120"
                            alt="The Climate Pledge"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900">Our services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard
                            title="City-to-city rides"
                            description="Your stress-free solution for long-distance rides with professional chauffeurs across the globe."
                            imageSrc="/charleston-black-cab-company (2).jpg"
                        />
                        <ServiceCard
                            title="Chauffeur hailing"
                            description="Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking."
                            imageSrc="/02f1f7cfe36b0f5f33652b4561dcfe5c.jpg?height=300&width=400"
                            isNew
                        />
                        <ServiceCard
                            title="Airport transfers"
                            description="With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze."
                            imageSrc="/CourtneyMac_Design_an_image_featuring_a_luxury_chauffeur-driven_756e7c04-70b8-4f33-ad0f-cf53402e56a6.jpg?height=300&width=400"
                        />
                        <ServiceCard
                            title="Hourly and full day hire"
                            description="For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort."
                            imageSrc="/Executive-Hire.avif?height=300&width=400"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

