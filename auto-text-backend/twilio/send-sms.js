var schedule = require('node-schedule');

const accountSid = 'ENTER IN ACCOUNT SID (removed for security)';
const authToken = 'ENTER IN AUTH TOKEN (removed for security)';
const client = require('twilio')(accountSid, authToken);

const sendAutomatedTexts = (numbers, message, frequency, frequencyUnits) => {
	let frequencyOfTexts;

	if (frequencyUnits === 'days') {
		frequencyOfTexts = `*/${frequency}`;
	} else if (frequencyUnits === 'hours') {
		frequencyOfTexts = `*/${frequency} * * *`;
	} else if (frequencyUnits === 'seconds') {
		frequencyOfTexts = `*/${frequency} * * * * *`;
	} else {
		frequencyOfTexts = `*/${frequency} * * * *`;
	}

	numbersToSendTo = numbers.split(',');

	var j = schedule.scheduleJob(frequencyOfTexts, () => {
		for (let i = 0; i < numbersToSendTo.length; i++) {
			client.messages
			  .create({
			     body: message,
			     from: '+MY NUMBER (removed for security)',
			     to: numbersToSendTo[i],
			   })
			  .then(message => console.log(message.sid));
		}
	});
};

module.exports.sendAutomatedTexts = sendAutomatedTexts;