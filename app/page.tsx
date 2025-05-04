import { ServicesSection } from '@/components/home/ServicesSection';
import { CityRoutes } from '@/components/home/CityRoutes';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import MainHeader from './components/home/MainHeader';

export default function Home() {
	return (
		<>
			<MainHeader heading={'Your US chauffeur service'} imagePath={'/final-banner.jpg'} showDownloadSection={false} />
			<ServicesSection />
			<CityRoutes />
			<FeaturesSection />
		</>
	);
}
