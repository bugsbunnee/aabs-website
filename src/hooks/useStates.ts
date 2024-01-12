import _ from 'lodash';
import useCountries from './useCountries';

const useStates = (country: string) => {
	const result = useCountries();

	const countryMatch = _.find(result.data.countries, ['id', country]);
	if (countryMatch) return countryMatch.states;

	return [];
};

export default useStates;
