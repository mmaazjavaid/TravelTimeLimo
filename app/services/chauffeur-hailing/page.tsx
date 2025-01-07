import MainHeader from "@/components/home/MainHeader";
import { ChauffeurBlog } from "@/components/Services/ChaufferHailing/ChaufferBlog";
import { FeaturesGrid } from "@/components/Services/ChaufferHailing/FeaturesGrid";

export default function ChaufferHailingPage() {
    return (
        <>
            <MainHeader
                heading={"Say hello to Chauffeur Hailing™!"}
                showBookingDialog={false}
                imagePath={"/black-car-service-1-1.jpg"}
            />
            <FeaturesGrid />
            <ChauffeurBlog />
        </>
    );
}
