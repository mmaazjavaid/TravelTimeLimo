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
		if (!input) return;

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

	const airportKeywords = ['Airport', 'JFK', 'LaGuardia', 'Bergstrom', 'IAH', 'DFW'];

	const onClickHandler = event => {
		event.preventDefault();
		const selectedLocation = event.target.innerText;

		// Check if the selected location is an airport
		const isAirport = airportKeywords.some(keyword => selectedLocation.includes(keyword));

		if (isAirport && distination === 'from') {
			globalStateController.updateState({
				isAirport: true,
			});
		}

		const isAustin = txKeywords.some(keyword => selectedLocation.includes(keyword))
		if (isAustin) {
			globalStateController.updateState({
				isAustin: true,
			});
		}

		setQuery(selectedLocation);
		setSuggestions([]);
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
				className="w-full h-10 pl-12 pr-10 bg-white border border-gray-600 rounded-lg shadow focus:border-gray-500 focus:ring-gray-500 font-semibold"
			/>
			{query && (
				<button
					onClick={clearInput}
					className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-700 hover:text-black focus:outline-none font-bold"
				>
					&#x2715;
				</button>
			)}
			{query && suggestions.length > 0 && (
				<ul className="absolute w-full mt-2 bg-white rounded-lg shadow z-10 font-semibold">
					{suggestions.map(suggestion => (
						<li
							key={suggestion.place_id}
							onClick={onClickHandler}
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold"
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
