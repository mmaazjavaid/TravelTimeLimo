import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import { TravelFeatures } from "@/components/Services/ChaufferService/TravelServices";

export default function ChaufferServicePage() {
    return (
        <>
            <MainHeader
                heading={"Your professional chauffeur service"}
                showDownloadSection={false}
                imagePath={"/IMG-20240815-WA0045.jpg"}
            />
            <TravelFeatures />
            <BlogsSection />
        </>
    );
}
