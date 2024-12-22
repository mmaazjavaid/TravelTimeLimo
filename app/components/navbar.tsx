import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container flex items-center justify-between h-16 px-4">
                <Link href="/" className="text-xl pl-48 font-bold">
                    TRAVEL TIME LIMO
                </Link>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="flex items-center gap-1">
                            Our services <ChevronDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-1">
                            For business <ChevronDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost">For chauffeurs</Button>
                        <Button variant="ghost">Help</Button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" className="flex items-center gap-1">
                            English <ChevronDown className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-1">
                            dani <ChevronDown className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

