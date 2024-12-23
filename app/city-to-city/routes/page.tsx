import MainSection from '@/components/city-to-city/routes/main-section';
import InfoSection from '@/components/city-to-city/routes/info-section';

export default function RoutesPage() {
	return (
		<main className="min-h-screen space-y-8">
			{/* Hero Section */}
			<MainSection />

			{/* Info Section */}
			<InfoSection />
		</main>
	);
}
