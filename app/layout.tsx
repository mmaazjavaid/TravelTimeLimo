import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const playfair = Playfair_Display({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['500', '600', '700', '800'],
});

export const metadata = {
	title: 'Travel Time Limo',
	description: 'Experience a Premium Chauffeur-Hailing Service: Your Alternative to Uber and Lyft for City Rides',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
				<Navbar />
				<ToastContainer position="top-right" theme="dark" />

				{/* Scrollable Content */}
				<div className="overflow-y-auto pt-20">{children}</div>

				<Footer />
			</body>
		</html>
	);
}
