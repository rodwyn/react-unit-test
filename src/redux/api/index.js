const axios = require('axios');

export const apiCall = (url, data, headers, method) =>
	axios({
		method,
		url,
		data,
		headers
	});
