import { Option } from '../models';
import http from './http';

interface CountriesResponse {
	countries: {
		id: string;
		name: string;
		states: Option[];
	}[];
}

const getCountries = () => {
	return http.get<CountriesResponse>('/api/countries').then((res) => res.data);
};

export default { getCountries };
