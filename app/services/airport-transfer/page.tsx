import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import CarService from "@/components/Services/AiportTransfer/CarService";
import FeaturesSection from "@/components/Services/AiportTransfer/FeaturesSection";

export default function AirportTransferPage() {
    return (
        <>
            <MainHeader
                heading={"Airport Transfer Service Worldwide"}
                imagePath={"/s-class-v-londone_web (1).jpg"}
            />
            <FeaturesSection />
            <CarService />
            <BlogsSection />
        </>
    );
}
