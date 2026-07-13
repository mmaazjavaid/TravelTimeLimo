'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { globalStateController } from '@/state/global/globalStateController';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScaleIn } from '@/components/ui/motion';

export default function ThankYouPage() {
	const shouldRedirect = useRef(true);
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;

	useEffect(() => {
		return () => {
			if (shouldRedirect.current) {
				globalStateController.reset();
				setTimeout(() => {
					window.location.href = '/';
				}, 3000);
			}
		};
	}, []);

	return (
		<div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-surface p-4">
			<ScaleIn className="w-full max-w-md">
				<Card className="border-border/60 shadow-lift">
					<CardContent className="p-8 text-center">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
							className="mb-6 flex justify-center"
						>
							<div className="rounded-full bg-success/10 p-3">
								<CheckCircle className="h-12 w-12 text-success" />
							</div>
						</motion.div>

						<h1 className="font-display text-3xl font-bold text-foreground">Thank You!</h1>
						<p className="mt-3 text-muted-foreground">
							Your ride has been successfully reserved. We look forward to serving you!
						</p>

						<div className="mt-8 space-y-3 rounded-xl bg-surface p-5 text-left">
							<div className="flex items-center gap-3">
								<Calendar className="h-4 w-4 shrink-0 text-gold" />
								<span className="text-sm text-foreground">Date: {bookingInfo?.date}</span>
							</div>
							<div className="flex items-center gap-3">
								<Clock className="h-4 w-4 shrink-0 text-gold" />
								<span className="text-sm text-foreground">Time: {bookingInfo?.time}</span>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="h-4 w-4 shrink-0 text-gold" />
								<span className="text-sm text-foreground">Pick Up: {bookingInfo?.from}</span>
							</div>
							{bookingInfo?.to && (
								<div className="flex items-center gap-3">
									<MapPin className="h-4 w-4 shrink-0 text-gold" />
									<span className="text-sm text-foreground">Destination: {bookingInfo?.to}</span>
								</div>
							)}
						</div>

						<Button variant="gradient" size="lg" className="mt-8 w-full" asChild>
							<Link
								onClick={() => {
									setTimeout(() => {
										globalStateController.reset();
									}, 2000);
								}}
								href="/"
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back to Home
							</Link>
						</Button>
					</CardContent>
				</Card>
			</ScaleIn>
		</div>
	);
}
