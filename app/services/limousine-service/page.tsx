import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import { TravelFeatures } from "@/components/Services/ChaufferService/TravelServices";

export default function LimousineServicePage() {
    return (
        <>
            <MainHeader
                heading={"Limo Service Around the Globe"}
                imagePath={"/s3-1024x576 copy.jpg"}
            />
            <TravelFeatures />
            <BlogsSection />
        </>
    );
}
