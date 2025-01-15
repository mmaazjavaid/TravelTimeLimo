import CitySection from '@/components/city-to-city/routes/city';
import { Features } from '@/components/city-to-city/routes/city/features';
import MainSection from '@/components/city-to-city/routes/city/MainSection';

export default function RouteService() {
	return (
		<div className="min-h-screen">
			<main>
				{/* Hero Section */}
				<MainSection />

				{/* Features Section */}
				<Features />

				{/* Content Section*/}
				<CitySection />
			</main>
		</div>
	);
}
