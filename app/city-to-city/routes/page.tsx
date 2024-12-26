import MainSection from '@/components/city-to-city/routes/MainSection';
import InfoSection from '@/components/city-to-city/routes/InfoSection';

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
