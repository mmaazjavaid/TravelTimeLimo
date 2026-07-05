import React, { useState } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { globalStateController } from '@/state/global/globalStateController';

const LOCATION_NY = '40.7696052,-73.5113524';
const LOCATION_TX = '30.4534963,-97.5566541';

// Curated fallback locations so the booking flow stays fully usable
// even when the live places API is unavailable.
const FALLBACK_LOCATIONS = [
	{ place_id: 'ny-jfk', description: 'John F. Kennedy International Airport (JFK), Queens, NY' },
	{ place_id: 'ny-lga', description: 'LaGuardia Airport (LGA), Queens, NY' },
	{ place_id: 'ny-ewr', description: 'Newark Liberty International Airport (EWR), Newark, NJ' },
	{ place_id: 'ny-times-square', description: 'Times Square, Manhattan, New York, NY' },
	{ place_id: 'ny-grand-central', description: 'Grand Central Terminal, Manhattan, New York, NY' },
	{ place_id: 'ny-penn', description: 'Penn Station, Manhattan, New York, NY' },
	{ place_id: 'ny-plaza', description: 'The Plaza Hotel, 5th Avenue, Manhattan, New York, NY' },
	{ place_id: 'ny-wall-st', description: 'Wall Street, Financial District, Manhattan, New York, NY' },
	{ place_id: 'ny-central-park', description: 'Central Park, Manhattan, New York, NY' },
	{ place_id: 'ny-brooklyn-bridge', description: 'Brooklyn Bridge, Brooklyn, New York, NY' },
	{ place_id: 'ny-barclays', description: 'Barclays Center, Brooklyn, New York, NY' },
	{ place_id: 'ny-yankee', description: 'Yankee Stadium, The Bronx, New York, NY' },
	{ place_id: 'tx-aus', description: 'Austin-Bergstrom International Airport (AUS), Austin, TX' },
	{ place_id: 'tx-downtown', description: 'Downtown Austin, Austin, TX' },
	{ place_id: 'tx-round-rock', description: 'Round Rock, TX' },
];

const filterFallback = (input: string) => {
	const q = (input || '').trim().toLowerCase();
	if (!q) return FALLBACK_LOCATIONS;
	return FALLBACK_LOCATIONS.filter(loc => loc.description.toLowerCase().includes(q));
};

const GoMapsAutocomplete = ({ placeholder, distination }) => {
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;

	const fetchFromLocation = async (input, location) => {
		try {
			const response = await axios.get('https://maps.gomaps.pro/maps/api/place/autocomplete/json', {
				params: {
					key: process.env.NEXT_PUBLIC_GOMAPS_PLACES_API_KEY,
					input,
					components: 'country:us',
					strictbounds: true,
					location,
					radius: 50000,
				},
			});
			return response.data.predictions || [];
		} catch (error) {
			console.error('Error fetching suggestions:', error);
			return [];
		}
	};

	const nyKeywords = ['New York', 'NY', 'JFK', 'LaGuardia', 'Manhattan', 'Brooklyn', 'Queens'];
	const txKeywords = ['Austin', 'TX', 'Texas', 'Bergstrom', 'Downtown', 'Round Rock'];
	const determineLocationSource = place => {
		if (!place) return null;

		if (nyKeywords.some(keyword => place.includes(keyword))) return LOCATION_NY;
		if (txKeywords.some(keyword => place.includes(keyword))) return LOCATION_TX;
		return null;
	};

	const fetchSuggestions = async input => {
		// Always show curated matches immediately (works with the API down).
		const fallback = filterFallback(input);

		if (!input) {
			setSuggestions(fallback);
			return;
		}

		try {
			const [suggestionsNY, suggestionsTX] = await Promise.all([
				fetchFromLocation(input, LOCATION_NY),
				fetchFromLocation(input, LOCATION_TX),
			]);

			let mergedSuggestions = [...suggestionsNY, ...suggestionsTX];

			const selectedLocation = determineLocationSource(bookingInfo?.from) || determineLocationSource(bookingInfo?.to);

			if (selectedLocation === LOCATION_NY) {
				mergedSuggestions = mergedSuggestions.filter(suggestion =>
					suggestionsNY.some(nySuggestion => nySuggestion.description === suggestion.description)
				);
			} else if (selectedLocation === LOCATION_TX) {
				mergedSuggestions = mergedSuggestions.filter(suggestion =>
					suggestionsTX.some(txSuggestion => txSuggestion.description === suggestion.description)
				);
			}

			if (bookingInfo?.from) {
				mergedSuggestions = mergedSuggestions.filter(
					suggestion => suggestion.description.toLowerCase() !== bookingInfo.from.toLowerCase()
				);
			}
			if (bookingInfo?.to) {
				mergedSuggestions = mergedSuggestions.filter(
					suggestion => suggestion.description.toLowerCase() !== bookingInfo.to.toLowerCase()
				);
			}

			mergedSuggestions = mergedSuggestions.filter(
				(suggestion, index, self) =>
					index === self.findIndex(s => s.description === suggestion.description)
			);

			// Fall back to curated locations if the API returns nothing.
			setSuggestions(mergedSuggestions.length ? mergedSuggestions : fallback);
		} catch (error) {
			console.error('Error merging suggestions:', error);
			setSuggestions(fallback);
		}
	};

	const clearInput = () => {
		setQuery('');
		setSuggestions([]);
		globalStateController.updateState({
			stepperForm: {
				...stepperValues?.stepperForm,
				bookingInfo: {
					...bookingInfo,
					[distination]: '',
				},
			},
		});
	};

	const airportKeywords = ['Airport', 'JFK', 'LaGuardia', 'Bergstrom', 'IAH', 'DFW'];

	const onClickHandler = event => {
		event.preventDefault();
		const selectedLocation = event.currentTarget.innerText;

		// Check if the selected location is an airport
		const isAirport = airportKeywords.some(keyword => selectedLocation.includes(keyword));

		if (isAirport && distination === 'from') {
			globalStateController.updateState({
				isAirport: true,
			});
		}

		const isAustin = txKeywords.some(keyword => selectedLocation.includes(keyword));
		if (isAustin) {
			globalStateController.updateState({
				isAustin: true,
			});
		}

		setQuery(selectedLocation);
		setSuggestions([]);
		setIsFocused(false);
		globalStateController.updateState({
			stepperForm: {
				...stepperValues?.stepperForm,
				bookingInfo: {
					...bookingInfo,
					[distination]: selectedLocation,
				},
			},
		});
	};

	const showDropdown = isFocused && suggestions.length > 0;

	return (
		<div className="autocomplete-container relative">
			<MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
			<Input
				type="text"
				value={query}
				onChange={e => {
					setQuery(e.target.value);
					fetchSuggestions(e.target.value);
				}}
				onFocus={() => {
					setIsFocused(true);
					if (!suggestions.length) fetchSuggestions(query);
				}}
				onBlur={() => setTimeout(() => setIsFocused(false), 150)}
				placeholder={placeholder}
				className="h-12 w-full rounded-lg border-white/15 bg-white/5 pl-10 pr-9 text-sm font-medium text-white shadow-sm placeholder:text-white/45 focus-visible:border-gold/60 focus-visible:ring-gold/40"
			/>
			{query && (
				<button
					onClick={clearInput}
					className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white focus:outline-none"
					aria-label="Clear"
				>
					&#x2715;
				</button>
			)}
			{showDropdown && (
				<ul className="absolute z-30 mt-2 max-h-72 w-full overflow-auto rounded-lg border border-white/10 bg-ink-soft py-1 shadow-2xl">
					{suggestions.map(suggestion => (
						<li
							key={suggestion.place_id}
							onMouseDown={onClickHandler}
							className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-white"
						>
							<MapPin className="h-4 w-4 shrink-0 text-gold/70" />
							<span>{suggestion.description}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default GoMapsAutocomplete;
