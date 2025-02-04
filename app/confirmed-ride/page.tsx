'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { globalStateController } from '@/state/global/globalStateController';

export default function ThankYouPage() {
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
					className="flex justify-center mb-6"
				>
					<CheckCircle className="text-green-500 w-16 h-16" />
				</motion.div>

				<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Thank You!</h1>
				<p className="text-center text-gray-600 mb-6">
					Your ride has been successfully reserved. We look forward to serving you!
				</p>

				<div className="space-y-4 mb-8">
					<div className="flex items-center">
						<Calendar className="text-blue-500 w-5 h-5 mr-2" />
						<span className="text-gray-700">Date: {bookingInfo?.date}</span>
					</div>
					<div className="flex items-center">
						<Clock className="text-blue-500 w-5 h-5 mr-2" />
						<span className="text-gray-700">Time: {bookingInfo?.time}</span>
					</div>
					<div className="flex items-center">
						<MapPin className="text-blue-500 w-5 h-5 mr-2" />
						<span className="text-gray-700">Pick Up: {bookingInfo?.from}</span>
					</div>
					{bookingInfo?.to && (
						<div className="flex items-center">
							<MapPin className="text-blue-500 w-5 h-5 mr-2" />
							<span className="text-gray-700">Destination: {bookingInfo?.to}</span>
						</div>
					)}
				</div>

				<div className="text-center">
					<Link
						onClick={() => {
							setTimeout(() => {
								globalStateController.reset();
							}, 2000);
						}}
						href="/"
						className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Home
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
