"use client"

import type * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Notes from "../service-class/Notes"
import { PAYMENT_NOTES } from "@/lib/constants"
import { globalStateController } from "@/state/global/globalStateController"

export function PaymentInfo() {
	const { stepperValues } = globalStateController.useState(["stepperForm"], "stepperValues")
	const paymentInfo = stepperValues?.stepperForm?.paymentInfo

	const formatCardNumber = (value: string) => {
		return value
			.replace(/\s/g, "")
			.replace(/(\d{4})/g, "$1 ")
			.trim()
	}

	const formatExpirationDate = (value: string) => {
		return value
			.replace(/\D/g, "")
			.replace(/(\d{2})(\d)/, "$1/$2")
			.slice(0, 5)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// send email with payment data
	}

	// US states for dropdown
	const usStates = [
		{ value: "AL", label: "Alabama" },
		{ value: "AK", label: "Alaska" },
		{ value: "AZ", label: "Arizona" },
		{ value: "AR", label: "Arkansas" },
		{ value: "CA", label: "California" },
		{ value: "CO", label: "Colorado" },
		{ value: "CT", label: "Connecticut" },
		{ value: "DE", label: "Delaware" },
		{ value: "FL", label: "Florida" },
		{ value: "GA", label: "Georgia" },
		{ value: "HI", label: "Hawaii" },
		{ value: "ID", label: "Idaho" },
		{ value: "IL", label: "Illinois" },
		{ value: "IN", label: "Indiana" },
		{ value: "IA", label: "Iowa" },
		{ value: "KS", label: "Kansas" },
		{ value: "KY", label: "Kentucky" },
		{ value: "LA", label: "Louisiana" },
		{ value: "ME", label: "Maine" },
		{ value: "MD", label: "Maryland" },
		{ value: "MA", label: "Massachusetts" },
		{ value: "MI", label: "Michigan" },
		{ value: "MN", label: "Minnesota" },
		{ value: "MS", label: "Mississippi" },
		{ value: "MO", label: "Missouri" },
		{ value: "MT", label: "Montana" },
		{ value: "NE", label: "Nebraska" },
		{ value: "NV", label: "Nevada" },
		{ value: "NH", label: "New Hampshire" },
		{ value: "NJ", label: "New Jersey" },
		{ value: "NM", label: "New Mexico" },
		{ value: "NY", label: "New York" },
		{ value: "NC", label: "North Carolina" },
		{ value: "ND", label: "North Dakota" },
		{ value: "OH", label: "Ohio" },
		{ value: "OK", label: "Oklahoma" },
		{ value: "OR", label: "Oregon" },
		{ value: "PA", label: "Pennsylvania" },
		{ value: "RI", label: "Rhode Island" },
		{ value: "SC", label: "South Carolina" },
		{ value: "SD", label: "South Dakota" },
		{ value: "TN", label: "Tennessee" },
		{ value: "TX", label: "Texas" },
		{ value: "UT", label: "Utah" },
		{ value: "VT", label: "Vermont" },
		{ value: "VA", label: "Virginia" },
		{ value: "WA", label: "Washington" },
		{ value: "WV", label: "West Virginia" },
		{ value: "WI", label: "Wisconsin" },
		{ value: "WY", label: "Wyoming" },
		{ value: "DC", label: "District of Columbia" },
	]

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
								onChange={(e) =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											paymentInfo: {
												...paymentInfo,
												nameOnCard: e.target.value,
											},
										},
									})
								}
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
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													cardNumber: formatCardNumber(e.target.value),
												},
											},
										})
									}
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
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													expirationDate: formatExpirationDate(e.target.value),
												},
											},
										})
									}
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
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													cvv: e.target.value,
												},
											},
										})
									}
									className="bg-gray-200"
									maxLength={4}
									required
								/>
							</div>
						</div>

						{/* Billing Address Fields */}
						<div className="space-y-2">
							<Label>
								Billing Address <span className="text-red-500">*</span>
							</Label>
							<Input
								value={paymentInfo.billingAddress}
								onChange={(e) =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											paymentInfo: {
												...paymentInfo,
												billingAddress: e.target.value,
											},
										},
									})
								}
								className="bg-gray-200"
								required
							/>
						</div>

						<div className="grid gap-4 sm:grid-cols-3">
							<div className="space-y-2">
								<Label>
									City <span className="text-red-500">*</span>
								</Label>
								<Input
									value={paymentInfo.city}
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													city: e.target.value,
												},
											},
										})
									}
									className="bg-gray-200"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label>
									State <span className="text-red-500">*</span>
								</Label>
								<Select
									value={paymentInfo.state}
									onValueChange={(value) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													state: value,
												},
											},
										})
									}
								>
									<SelectTrigger className="bg-gray-200">
										<SelectValue placeholder="Select state" />
									</SelectTrigger>
									<SelectContent>
										{usStates.map((state) => (
											<SelectItem key={state.value} value={state.value}>
												{state.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label>
									Zip Code <span className="text-red-500">*</span>
								</Label>
								<Input
									value={paymentInfo.zip}
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												paymentInfo: {
													...paymentInfo,
													zip: e.target.value,
												},
											},
										})
									}
									className="bg-gray-200"
									maxLength={10}
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
