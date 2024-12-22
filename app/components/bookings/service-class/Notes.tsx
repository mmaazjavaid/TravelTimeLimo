import { NOTES } from '@/lib/constants';
import { AlertCircle } from 'lucide-react';

const Notes: React.FC = () => {
	return (
		<div className="p-4">
			<h3 className="text-lg font-medium mb-4">Please note:</h3>
			<div className="space-y-4">
				{NOTES.map((note, index) => (
					<div key={index} className="flex items-start gap-3">
						<div className="flex-shrink-0">
							<AlertCircle fill="#64666b" className="w-6 h-6 text-white" />
						</div>
						<p className="text-gray-600">{note}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
