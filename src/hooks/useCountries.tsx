import { useQuery } from '@tanstack/react-query';

import countries from '../services/countries';
import countryList from '../data/country-list';

const useCountries = () => {
	return useQuery({
		queryKey: ['countries'],
		queryFn: countries.getCountries,
		initialData: countryList,
	});
};

export default useCountries;
