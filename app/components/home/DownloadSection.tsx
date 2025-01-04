import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
    return (
        <div className="relative bg-black text-white py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Chauffeurs at your fingertips
                    </h2>
                    <p className="text-sm sm:text-md mb-8">
                        Download the Travel Time Limo app to easily book safe, private rides while you&apos;re on the go.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <div className="w-32 h-32 bg-white p-2 rounded-lg">
                            <Image
                                src="/app_qrcode.svg"
                                alt="QR Code"
                                width={120}
                                height={120}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto">
                                <Image
                                    src="/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
                                    alt="Download on the App Store"
                                    width={120}
                                    height={40}
                                    className="w-auto h-8"
                                />
                            </Button>
                            <Button className="w-full sm:w-auto">
                                <Image
                                    src="/png-clipart-google-play-text-google-play-android-app-store-google-play-text-logo.png"
                                    alt="Get it on Google Play"
                                    width={120}
                                    height={40}
                                    className="w-auto h-8"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="https://images.ctfassets.net/ov8o7v78mnye/6JTwhj2JHkJqdyGKQqeCW0/1c365adecbf39ae640d66a8ed557f04e/BackgroundDesktop.svg"
                    alt="Map Background"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}

