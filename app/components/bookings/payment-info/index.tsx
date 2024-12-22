'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Notes from '../service-class/Notes';
import { PAYMENT_NOTES } from '@/lib/constants';

interface CreditCardFormData {
	nameOnCard: string;
	cardNumber: string;
	expirationDate: string;
	cvv: string;
	saveCard: boolean;
}

export function PaymentInfo() {
	const [formData, setFormData] = React.useState<CreditCardFormData>({
		nameOnCard: '',
		cardNumber: '',
		expirationDate: '',
		cvv: '',
		saveCard: false,
	});

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
		// onSubmit(formData);
	};

	return (
		<div>
			<h1 className="mb-8 text-2xl font-semibold">Add credit card</h1>

			<form onSubmit={handleSubmit}>
				<Card className="mb-6 p-6">
					<div className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="nameOnCard">
								Name on card <span className="text-red-500">*</span>
							</Label>
							<Input
								id="nameOnCard"
								value={formData.nameOnCard}
								onChange={e =>
									setFormData(prev => ({
										...prev,
										nameOnCard: e.target.value,
									}))
								}
								className="bg-gray-50"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="cardNumber">
								Card number <span className="text-red-500">*</span>
							</Label>
							<div className="relative">
								<Input
									id="cardNumber"
									value={formData.cardNumber}
									onChange={e =>
										setFormData(prev => ({
											...prev,
											cardNumber: formatCardNumber(e.target.value),
										}))
									}
									className="bg-gray-50"
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
								<Label htmlFor="expirationDate">
									Expiration date <span className="text-red-500">*</span>
								</Label>
								<Input
									id="expirationDate"
									placeholder="MM/YY"
									value={formData.expirationDate}
									onChange={e =>
										setFormData(prev => ({
											...prev,
											expirationDate: formatExpirationDate(e.target.value),
										}))
									}
									className="bg-gray-50"
									maxLength={5}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="cvv">
									CVV <span className="text-red-500">*</span>
								</Label>
								<Input
									id="cvv"
									type="password"
									value={formData.cvv}
									onChange={e =>
										setFormData(prev => ({
											...prev,
											cvv: e.target.value,
										}))
									}
									className="bg-gray-50"
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
