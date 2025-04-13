import { NotesProps } from '@/types/bookings';
import { AlertCircle } from 'lucide-react';

const Notes: React.FC<NotesProps> = ({ notes }) => {
	return (
		<div className="p-4">
			<h3 className="text-lg font-medium mb-4">Please note:</h3>
			<div className="space-y-4">
				{notes.map((note, index) => (
					<div key={index} className="flex items-start gap-3">
						<div className="flex-shrink-0">
							<AlertCircle fill="#dc2626" className="w-6 h-6 text-white" />
						</div>
						<p className="text-red-700">{note}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
