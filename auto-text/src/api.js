import superagent from 'superagent';

const backendURL = 'http://localhost:3001/forminformation';

export function submitFormData(formData, callback, errorCallback) {
	superagent.post(backendURL)
		.set('Content-Type', 'application/json')
	  .send(formData)
	  .then(callback, errorCallback)
}