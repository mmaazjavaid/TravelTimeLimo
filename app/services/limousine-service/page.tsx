import MainHeader from "@/components/home/MainHeader";
import { BlogsSection } from "@/components/Services/AiportTransfer/blogsSection";
import { TravelFeatures } from "@/components/Services/ChaufferService/TravelServices";

export default function LimousineServicePage() {
    return (
        <>
            <MainHeader
                heading={"Limo Service Around the Globe"}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/5qJoaOH7PQMJHoJVSKJhum/b3902c85c1a99b64fdedc704ad71f2a2/01_Hero.webp?fm=webp"}
            />
            <TravelFeatures />
            <BlogsSection />
        </>
    );
}
