import { Clock } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { BookForSomeoneForm } from './BookForSomeone';
import Notes from '../service-class/Notes';
import { PICKUP_INFO_NOTES } from '@/lib/constants';
import { globalStateController } from '@/state/global/globalStateController';

export function PickupInfo() {
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');

	const pickUpInfo = stepperValues?.stepperForm?.pickUpInfo;

	return (
		<>
			<div className="mt-8">
				<h2 className="mb-6 font-display text-2xl font-semibold text-foreground">Passenger Details</h2>
				<BookForSomeoneForm />
			</div>

			{/* Additional Information */}
			<div className="mt-8">
				<h2 className="mb-6 font-display text-2xl font-semibold text-foreground">Provide additional information</h2>
				<Card className="border-border/60 shadow-soft">
					<CardContent className="space-y-6 pt-6">
						{/* Flight Number */}
						<div className="space-y-2">
							<Label htmlFor="flight-number">Flight number</Label>
							<Input
								id="flight-number"
								className="bg-surface"
								placeholder="e.g. LH 202, U24567, BA2490"
								value={pickUpInfo?.flightNumber}
								onChange={e =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											pickUpInfo: {
												...pickUpInfo,
												flightNumber: e.target.value,
											},
										},
									})
								}
							/>
							<p className="text-sm text-muted-foreground">
								Enter your flight number to ensure your chauffeur can track your flight and adjust the pickup time.
							</p>
						</div>

						{/* Flight Arrival Time */}
						<div className="space-y-2">
							<Label htmlFor="flight-arrival-time">Flight arrival time</Label>
							<div className="relative">
								<Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
								<Input
									id="flight-arrival-time"
									type="time"
									className="dark-picker bg-surface pl-10"
									value={pickUpInfo?.flightArrivalTime}
									onChange={(e) =>
										globalStateController.updateState({
											stepperForm: {
												...stepperValues?.stepperForm,
												pickUpInfo: {
													...pickUpInfo,
													flightArrivalTime: e.target.value,
												},
											},
										})
									}
								/>
							</div>
							<p className="text-sm text-muted-foreground">
								Enter your scheduled arrival time to help coordinate your pickup.
							</p>
						</div>

						{/* Pickup Sign */}
						<div className="space-y-2">
							<Label htmlFor="pickup-sign">Pickup sign</Label>
							<Input
								id="pickup-sign"
								className="bg-surface"
								value={pickUpInfo?.pickupSign}
								onChange={e =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											pickUpInfo: {
												...pickUpInfo,
												pickupSign: e.target.value,
											},
										},
									})
								}
							/>
							<p className="text-sm text-muted-foreground">
								It will appear on your chauffeur's pickup sign when they meet you.
							</p>
						</div>

						{/* Notes */}
						<div className="space-y-2">
							<Label htmlFor="notes">Notes for the chauffeur</Label>
							<Textarea
								id="notes"
								value={pickUpInfo?.notes}
								onChange={e =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											pickUpInfo: {
												...pickUpInfo,
												notes: e.target.value,
											},
										},
									})
								}
								className="min-h-[100px] resize-none bg-surface"
							/>
							<p className="text-sm text-muted-foreground">
								Add special requests, e.g. booking itinerary, number of bags, child seats, etc. Please do not include
								confidential information.
							</p>
						</div>

						{/* Reference Code */}
						<div className="space-y-2">
							<Label htmlFor="reference-code">Reference code or cost center</Label>
							<Input
								id="reference-code"
								className="bg-surface"
								value={pickUpInfo?.referenceCode}
								onChange={e =>
									globalStateController.updateState({
										stepperForm: {
											...stepperValues?.stepperForm,
											pickUpInfo: {
												...pickUpInfo,
												referenceCode: e.target.value,
											},
										},
									})
								}
							/>
							<p className="text-sm text-muted-foreground">
								Booking for business? What you enter above will appear on the invoice.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card className="mt-8 border-border/60 shadow-soft">
					<CardContent className="space-y-6 pt-6">
						<Notes notes={PICKUP_INFO_NOTES} />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
