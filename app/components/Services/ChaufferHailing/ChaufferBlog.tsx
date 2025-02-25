import Image from "next/image"
import { Button } from "@/components/ui/button"

const cities = [
    "Dubai, U.A.E",
    "Miami, Florida, U.S."
]

export function ChauffeurBlog() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative aspect-[16/12] w-full overflow-hidden rounded-lg">
                    <Image
                        src="https://images.ctfassets.net/ov8o7v78mnye/5O1WZj5T3ydUe72czaxhG9/23de3620c2c3b6d664a1f0589284e8a3/content-block-2.png?w=1280&fm=webp"
                        alt="Luxury chauffeur service"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Convenient on-demand rides within minutes
                    </h2>
                    <p className="text-lg text-gray-600">
                        When you need a safe way to get around the city, think Travel time Limo's Chauffeur Hailing™. You can book the top-quality service you know and love for immediate pickup in the cities listed below. The perfect combination of traditional car service and ride hailing, chauffeur hailing is now available in the new version of the Travel time Limo app for iOS and Android.
                    </p>
                    {/* <Button
                        className="bg-red-500 hover:bg-red-600 text-white px-8"
                    >
                        Get the app
                    </Button> */}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                    Chauffeur Hailing™ is available in:
                </h3>
                <ul className="space-y-2">
                    {cities.map((city, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            <span className="text-lg">{city}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-lg text-gray-600 italic">
                    Stay tuned for more to come!
                </p>
            </div>
        </div>
    )
}

