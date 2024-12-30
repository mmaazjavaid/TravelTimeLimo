import MainHeader from "@/components/home/MainHeader";
import Testimonials from "@/components/Services/CityToCity/Testemonials";
import TransportComparison from "@/components/Services/CityToCity/TransportComparison";
import { CityRoutes } from '@/components/home/CityRoutes';

export default function CityToCityPage() {
    return (
        <>
            <MainHeader
                heading={"City-to-City Long Distance Car Service"}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/4k07hkseEOyBAOdkoEnLYu/7eda7d4be70ba875f0b41946e7ec52d4/Hero_01__2_.jpg?fm=webp"}
            />
            <TransportComparison />
            <Testimonials />
            <CityRoutes />
        </>
    );
}
