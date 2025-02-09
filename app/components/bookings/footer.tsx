import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { globalStateController } from '@/state/global/globalStateController';

const BookingFooter: React.FC<{ onNextStep: () => void }> = ({ onNextStep }) => {
	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const { isTermsAgreed } = stepperValues?.stepperForm;
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pb-8">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-3 ">
				<Checkbox
					id="terms"
					checked={isTermsAgreed}
					onCheckedChange={checked =>
						globalStateController.updateState({
							stepperForm: { ...stepperValues?.stepperForm, isTermsAgreed: checked },
						})
					}
				/>
				<Link href="/terms" target="_blank" className="text-gray-600 underline hover:text-gray-800 transition-colors">
					Agree to terms & conditions
				</Link>
			</div>
			<Button
				disabled={!isTermsAgreed}
				onClick={onNextStep}
				variant="gradient"
				className="w-full sm:w-auto text-white text-lg py-6 px-8 rounded-xl"
			>
				Continue
			</Button>
		</div>
	);
};

export default BookingFooter;
