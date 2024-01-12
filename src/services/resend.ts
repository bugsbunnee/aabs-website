import http from './http';

const sendLawyerRequestEmail = <T>(metadata: T) => {
	return http
		.post('/api/request-lawyer', JSON.stringify(metadata))
		.then((res) => res.data);
};

const sendNewsletterEmail = <T>(metadata: T) => {
	return http
		.post('/api/newsletter', JSON.stringify(metadata))
		.then((res) => res.data);
};

export default { sendLawyerRequestEmail, sendNewsletterEmail };
