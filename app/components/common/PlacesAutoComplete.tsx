import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { globalStateController } from '@/state/global/globalStateController';

const LOCATION_NY = '40.7696052,-73.5113524';
const LOCATION_TX = '30.2726839,-97.7498649';

const GoMapsAutocomplete = ({ placeholder, distination }) => {
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const { stepperValues } = globalStateController.useState(['stepperForm'], 'stepperValues');
	const bookingInfo = stepperValues?.stepperForm?.bookingInfo;

	// API call function
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

	// Determine which location the selected place belongs to
	const determineLocationSource = place => {
		if (!place) return null;
		const nyKeywords = ['New York', 'NY', 'JFK', 'LaGuardia', 'Manhattan', 'Brooklyn', 'Queens'];
		const txKeywords = ['Austin', 'TX', 'Texas', 'Bergstrom', 'Downtown', 'Round Rock'];

		if (nyKeywords.some(keyword => place.includes(keyword))) return LOCATION_NY;
		if (txKeywords.some(keyword => place.includes(keyword))) return LOCATION_TX;
		return null;
	};

	// Fetch suggestions from both locations & merge
	const fetchSuggestions = async input => {
		if (!input) return;

		try {
			const [suggestionsNY, suggestionsTX] = await Promise.all([
				fetchFromLocation(input, LOCATION_NY),
				fetchFromLocation(input, LOCATION_TX),
			]);

			let mergedSuggestions = [...suggestionsNY, ...suggestionsTX];

			// Determine if 'from' or 'to' is already selected and from which location
			const selectedLocation = determineLocationSource(bookingInfo?.from) || determineLocationSource(bookingInfo?.to);

			if (selectedLocation === LOCATION_NY) {
				// If user selected a NY location, filter out Austin suggestions
				mergedSuggestions = mergedSuggestions.filter(suggestion =>
					suggestionsNY.some(nySuggestion => nySuggestion.description === suggestion.description)
				);
			} else if (selectedLocation === LOCATION_TX) {
				// If user selected an Austin location, filter out NY suggestions
				mergedSuggestions = mergedSuggestions.filter(suggestion =>
					suggestionsTX.some(txSuggestion => txSuggestion.description === suggestion.description)
				);
			}

			// Deduplicate results based on description
			mergedSuggestions = mergedSuggestions.filter(
				(suggestion, index, self) =>
					index === self.findIndex(s => s.description === suggestion.description)
			);

			setSuggestions(mergedSuggestions);
		} catch (error) {
			console.error('Error merging suggestions:', error);
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

	const onClickHandler = event => {
		event.preventDefault();
		setQuery(event.target.innerText);
		setSuggestions([]);
		globalStateController.updateState({
			stepperForm: {
				...stepperValues?.stepperForm,
				bookingInfo: {
					...bookingInfo,
					[distination]: event.target.innerText,
				},
			},
		});
	};

	return (
		<div className="autocomplete-container">
			<Input
				type="text"
				value={query}
				onChange={e => {
					setQuery(e.target.value);
					fetchSuggestions(e.target.value);
				}}
				placeholder={placeholder}
				className="w-full h-10 pl-12 pr-10 bg-white border border-gray-300 rounded-lg shadow focus:border-gray-400 focus:ring-gray-400"
			/>
			{query && (
				<button
					onClick={clearInput}
					className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
				>
					&#x2715;
				</button>
			)}
			{query && suggestions.length > 0 && (
				<ul className="absolute w-full mt-2 bg-white rounded-lg shadow z-10">
					{suggestions.map(suggestion => (
						<li
							key={suggestion.place_id}
							onClick={onClickHandler}
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
						>
							{suggestion.description}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default GoMapsAutocomplete;
