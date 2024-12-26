import { Car, Leaf, Shield } from 'lucide-react'

export function FeaturesSection() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
                {/* Safety Feature */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-8">
                        <Shield className="w-20 h-20 text-[#E55C3D]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Safety first</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Travel confidently knowing your safety is our #1 priority.
                        Rigorous health and cleaning standards round out a best-in-class service.
                    </p>
                </div>

                {/* Private Travel Feature */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-8">
                        <Car className="w-20 h-20 text-[#E55C3D]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Private travel solutions</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Discover your one-stop travel shop: long-distance rides, one way or return, by the hour,
                        airport transfers, and more.
                    </p>
                </div>

                {/* Sustainable Travel Feature */}
                <div className="flex flex-col items-center text-center">
                    <div className="mb-8">
                        <Leaf className="w-20 h-20 text-[#E55C3D]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-6">Sustainable travel</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Breathe easy knowing all ride emissions are offset, as part of our global carbon offset
                        program — the industry's first.
                    </p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="text-center space-y-6">
                <blockquote className="text-3xl md:text-4xl font-semibold leading-tight max-w-4xl mx-auto">
                    "New chauffeur-hailing service seeks to challenge Uber, Lyft in city rides"
                </blockquote>
                <cite className="text-lg text-muted-foreground not-italic">
                    The Wall Street Journal
                </cite>
            </div>
        </div>
    )
}

