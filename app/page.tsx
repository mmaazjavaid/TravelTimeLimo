import { ServicesSection } from '@/components/home/ServicesSection';
import { CityRoutes } from '@/components/home/CityRoutes';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import MainHeader from './components/home/MainHeader';

export default function Home() {
	console.log('NEXT_PUBLIC_SITE_URL: ', process.env.NEXT_PUBLIC_SITE_URL);
	console.log('NEXT_PUBLIC_GOMAPS_PLACES_API_KEY: ', process.env.NEXT_PUBLIC_GOMAPS_PLACES_API_KEY);
	console.log('NEXT_PUBLIC_MONGO_DB_URI: ', process.env.NEXT_PUBLIC_MONGO_DB_URI);
	console.log('NEXT_PUBLIC_ADMIN_SECRET: ', process.env.NEXT_PUBLIC_ADMIN_SECRET);
	console.log('NEXT_PUBLIC_SENDGRID_API_KEY: ', process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
	console.log('NEXT_PUBLIC_SENDER_EMAIL: ', process.env.NEXT_PUBLIC_SENDER_EMAIL);
	console.log('NEXT_PUBLIC_RECEIVER_EMAIL: ', process.env.NEXT_PUBLIC_RECEIVER_EMAIL);

	return (
		<>
			<MainHeader heading={'Your global chauffeur service'} imagePath={'/car-12.jpg'} showDownloadSection={false} />
			<ServicesSection />
			<CityRoutes />
			<FeaturesSection />
		</>
	);
}
