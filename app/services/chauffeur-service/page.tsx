import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import { TravelFeatures } from "@/components/Services/ChaufferService/TravelServices";

export default function ChaufferServicePage() {
    return (
        <>
            <MainHeader
                heading={"Your professional chauffeur service"}
                showDownloadSection={false}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/55zUvTExn1W2IMJgggaH0j/4760862fedcb3bf7ca05688e4e4ea796/01_Hero.jpg?fm=webp"}
            />
            <TravelFeatures />
            <BlogsSection />
        </>
    );
}
