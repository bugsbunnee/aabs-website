import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 30_000,
});

export default axiosInstance;
