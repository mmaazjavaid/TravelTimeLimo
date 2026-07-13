import { NotesProps } from '@/types/bookings';
import { Info } from 'lucide-react';

const Notes: React.FC<NotesProps> = ({ notes }) => {
	return (
		<div className="p-5">
			<h3 className="mb-4 font-display text-lg font-semibold text-foreground">Please note</h3>
			<div className="space-y-3">
				{notes.map((note, index) => (
					<div key={index} className="flex items-start gap-3">
						<Info className="mt-0.5 h-4 w-4 shrink-0 text-graphite" strokeWidth={2} />
						<p className="text-sm leading-relaxed text-muted-foreground">{note}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notes;
