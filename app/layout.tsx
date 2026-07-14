import { Manrope, Fraunces } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ToastContainer } from 'react-toastify';
import { BookingStatePersistence } from './state/global/BookingStatePersistence';

const manrope = Manrope({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

const fraunces = Fraunces({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
});

export const metadata = {
	title: 'Travel Time Limo',
	description: 'Experience a Premium Chauffeur-Hailing Service: Your Alternative to Uber and Lyft for City Rides',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<Navbar />
				<BookingStatePersistence />
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
