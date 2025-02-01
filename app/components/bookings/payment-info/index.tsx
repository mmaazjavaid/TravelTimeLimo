'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Notes from '../service-class/Notes';
import { PAYMENT_NOTES } from '@/lib/constants';
import { globalStateController } from '@/state/global/globalStateController';

export function PaymentInfo() {
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const paymentInfo = stepperValues?.stepperForm?.paymentInfo;



	const formatCardNumber = (value: string) => {
		return value
			.replace(/\s/g, '')
			.replace(/(\d{4})/g, '$1 ')
			.trim();
	};

	const formatExpirationDate = (value: string) => {
		return value
			.replace(/\D/g, '')
			.replace(/(\d{2})(\d)/, '$1/$2')
			.slice(0, 5);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// send email with payment data

	};

	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">Add credit card</h1>

			<form onSubmit={handleSubmit}>
				<Card className="mb-6 p-6">
					<div className="space-y-6">
						<div className="space-y-2">
							<Label>
								Name on card <span className="text-red-500">*</span>
							</Label>
							<Input
								value={paymentInfo.nameOnCard}
								onChange={(e) => globalStateController.updateState({
									stepperForm: {
										...stepperValues?.stepperForm,
										paymentInfo: {
											...paymentInfo,
											nameOnCard: e.target.value
										}
									}
								})}
								className="bg-gray-200"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label>
								Card number <span className="text-red-500">*</span>
							</Label>
							<div className="relative">
								<Input
									id="cardNumber"
									value={paymentInfo.cardNumber}
									onChange={(e) => globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											paymentInfo: {
												...paymentInfo,
												cardNumber: e.target.value
											}
										}
									})}
									className="bg-gray-200"
									maxLength={19}
									required
								/>
								<div className="absolute right-3 top-1/2 -translate-y-1/2 space-x-1">
									<img src="/master-card.svg" alt="Mastercard" className="inline-block h-6 w-auto" />
									<img src="/visa-card.svg" alt="Visa" className="inline-block h-6 w-auto" />
									<img src="/american-express.svg" alt="American Express" className="inline-block h-6 w-auto" />
								</div>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-2">
								<Label>
									Expiration date <span className="text-red-500">*</span>
								</Label>
								<Input
									id="expirationDate"
									placeholder="MM/YY"
									value={paymentInfo.expirationDate}
									onChange={(e) => globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											paymentInfo: {
												...paymentInfo,
												expirationDate: e.target.value
											}
										}
									})}
									className="bg-gray-200"
									maxLength={5}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label>
									CVV <span className="text-red-500">*</span>
								</Label>
								<Input
									id="cvv"
									type="password"
									value={paymentInfo.cvv}
									onChange={(e) => globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											paymentInfo: {
												...paymentInfo,
												cvv: e.target.value
											}
										}
									})}
									className="bg-gray-200"
									maxLength={4}
									required
								/>
							</div>
						</div>
					</div>
				</Card>
			</form>

			<Card className="mt-8">
				<CardContent className="space-y-6 pt-6">
					<Notes notes={PAYMENT_NOTES} />
				</CardContent>
			</Card>
		</div>
	);
}
