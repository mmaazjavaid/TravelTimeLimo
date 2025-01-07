import MainHeader from "@/components/home/MainHeader";
import Testimonials from "@/components/Services/CityToCity/Testemonials";
import { HourlyPlan } from "@/components/Services/HourlyService/HourlyPlan";
import { MultiStopJourney } from "@/components/Services/HourlyService/MultiShopJourney";

export default function HourlyCarServicePage() {
    return (
        <>
            <MainHeader
                heading={"By-the-hour chauffeur and full-day driver hire"}
                imagePath={"/Cheap-taxi-in-Rome.jpg"}
            />
            <HourlyPlan />
            <MultiStopJourney />
            <Testimonials />
        </>
    );
}
