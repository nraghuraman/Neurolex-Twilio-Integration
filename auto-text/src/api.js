import superagent from 'superagent';

const smsBackendURL = 'http://localhost:3001/smsforminformation';
const callBackendURL = 'http://localhost:3001/callforminformation';

export function submitFormData(formData, callback, errorCallback, typeOfData) {
	superagent.post(typeOfData === 'sms' ? smsBackendURL : callBackendURL)
		.set('Content-Type', 'application/json')
	  .send(formData)
	  .then(callback, errorCallback)
}