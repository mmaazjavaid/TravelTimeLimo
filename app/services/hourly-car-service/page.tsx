import MainHeader from "@/components/home/MainHeader";
import Testimonials from "@/components/Services/CityToCity/Testemonials";
import { HourlyPlan } from "@/components/Services/HourlyService/HourlyPlan";
import { MultiStopJourney } from "@/components/Services/HourlyService/MultiShopJourney";

export default function HourlyCarServicePage() {
    return (
        <>
            <MainHeader
                heading={"By-the-hour chauffeur and full-day driver hire"}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/4SRDLOzQL5KkZAuHG9ywwe/d3490410ce8fe49efe40bfe1b2cea2c4/Blacklane-Socials-NYC-20_Header_LP.jpg?fm=webp"}
            />
            <HourlyPlan />
            <MultiStopJourney />
            <Testimonials />
        </>
    );
}
