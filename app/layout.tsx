import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
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
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<Navbar />
				<ToastContainer
					position="top-right"
					theme="dark"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnHover
				/>
				<main id="main-content" className="min-h-screen overflow-y-auto pt-[4.5rem]">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
