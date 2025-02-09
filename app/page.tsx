import { ServicesSection } from '@/components/home/ServicesSection';
import { CityRoutes } from '@/components/home/CityRoutes';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import MainHeader from './components/home/MainHeader';

export default function Home() {
	return (
		<>
			<MainHeader heading={'Your global chauffeur service'} imagePath={'/car-12.jpg'} showDownloadSection={false} />
			<ServicesSection />
			<CityRoutes />
			<FeaturesSection />
		</>
	);
}
