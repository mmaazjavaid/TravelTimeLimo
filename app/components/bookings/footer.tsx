import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { globalStateController } from '@/state/global/globalStateController';

const BookingFooter: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const { isTermsAgreed } = stepperValues?.stepperForm;

	return (
		<div className="sticky bottom-0 z-10 -mx-4 mt-8 border-t border-border/60 bg-white/95 px-4 py-4 backdrop-blur-sm sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
			<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
				<div className="flex items-center gap-3">
					<Checkbox
						id="terms"
						checked={isTermsAgreed}
						onCheckedChange={checked =>
							globalStateController.updateState({
								stepperForm: { ...stepperValues?.stepperForm, isTermsAgreed: checked },
							})
						}
					/>
					<Label htmlFor="terms" className="cursor-pointer text-sm text-muted-foreground">
						I agree to the{' '}
						<Link href="/terms" target="_blank" className="text-gold underline-offset-4 hover:text-gold-dark hover:underline">
							terms &amp; conditions
						</Link>
					</Label>
				</div>
				<Button
					disabled={!isTermsAgreed}
					onClick={onNextStep}
					variant="gradient"
					size="lg"
					className="w-full sm:w-auto"
				>
					Continue
				</Button>
			</div>
		</div>
	);
};

export default BookingFooter;
