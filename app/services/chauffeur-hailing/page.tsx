import MainHeader from "@/components/home/MainHeader";
import { ChauffeurBlog } from "@/components/Services/ChaufferHailing/ChaufferBlog";
import { FeaturesGrid } from "@/components/Services/ChaufferHailing/FeaturesGrid";

export default function ChaufferHailingPage() {
    return (
        <>
            <MainHeader
                heading={"Say hello to Chauffeur Hailing™!"}
                showBookingDialog={false}
                imagePath={"https://images.ctfassets.net/ov8o7v78mnye/2k1HwWsuDXBRFATe3ut6D6/c8daa968a96d801d438b02e1717a09fe/header-hero.png?fm=webp"}
            />
            <FeaturesGrid />
            <ChauffeurBlog />
        </>
    );
}
