import { AMENITIES } from '@/lib/constants';

const AmenitiesList: React.FC = () => {
	return (
		<div className="p-4">
			<p className="mb-4 font-display text-lg font-semibold text-gray-900">All classes include:</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{AMENITIES.map((amenity, index) => (
					<div key={index} className="flex items-center gap-3 text-sm">
						<div className="flex-shrink-0 rounded-full bg-gold/10 p-2">
							<amenity.icon className="h-4 w-4 text-gold-dark" />
						</div>
						<span className="text-gray-700">{amenity.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default AmenitiesList;
