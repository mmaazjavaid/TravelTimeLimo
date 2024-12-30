import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import CarService from "@/components/Services/AiportTransfer/CarService";
import FeaturesSection from "@/components/Services/AiportTransfer/FeaturesSection";

export default function AirportTransferPage() {
    return (
        <>
            <MainHeader
                heading={"Airport Transfer Service Worldwide"}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/2hQ4Zm5cxvBjZ8kUA2AWOV/f6a7b5f3b3c3acdce3f82172740508f0/Hero_AT__1_.webp?fm=webp&w=3840"}
            />
            <FeaturesSection />
            <CarService />
            <BlogsSection />
        </>
    );
}
