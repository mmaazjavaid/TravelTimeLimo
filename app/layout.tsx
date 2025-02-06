import { Geist, Geist_Mono } from 'next/font/google';
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

export const metadata = {
	title: 'Travel Time Limo',
	description: 'Experience a Premium Chauffeur-Hailing Service: Your Alternative to Uber and Lyft for City Rides',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				<ToastContainer />

				{/* Scrollable Content */}
				<div className="overflow-y-auto mt-8">{children}</div>

				<Footer />
			</body>
		</html>
	);
}
