import MainHeader from "@/components/home/MainHeader";
import Testimonials from "@/components/Services/CityToCity/Testemonials";
import TransportComparison from "@/components/Services/CityToCity/TransportComparison";
import { CityRoutes } from '@/components/home/CityRoutes';

export default function CityToCityPage() {
    return (
        <>
            <MainHeader
                heading={"City-to-City Long Distance Car Service"}
                imagePath={"/SD-Blackcar-Del-Mar-Fleet.jpg"}
            />
            <TransportComparison />
            <Testimonials />
            <CityRoutes />
        </>
    );
}
