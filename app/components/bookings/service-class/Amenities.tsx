import { AMENITIES } from '@/lib/constants';

const AmenitiesList: React.FC = () => {
	return (
		<div className="p-4">
			<p className="text-lg font-medium mb-4">All classes include:</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{AMENITIES.map((amenity, index) => (
					<div key={index} className="flex items-center gap-3 text-sm">
						<div className="flex-shrink-0">
							<amenity.icon className="w-5 h-5 text-gray-600" />
						</div>
						<span className="text-gray-600">{amenity.text}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default AmenitiesList;
