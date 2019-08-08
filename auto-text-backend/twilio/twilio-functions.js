/* Paste your account SID, auth token, and Twilio number in the designated sections below */
const accountSid = 'YOUR ACCOUNT SID';
const authToken = 'YOUR AUTH TOKEN';
const client = require('twilio')(accountSid, authToken);
const schedule = require('node-schedule');

const twilioNumber = 'YOUR TWILIO NUMBER';

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
			     from: twilioNumber,
			     to: numbersToSendTo[i],
			   })
			  .then(message => console.log(message.sid));
		}
	});
};

const callNumber = (number, message) => {
  const messageToSend = message.replace(/ /g, '+');

  /*
   * The below variable contains the name of the URL from which the configuration for the phone call
   * is read by Twilio. To create a URL with XML that can be exposed to Twilio, go to your Twilio account
   * and add a new TwiML bin with the XML code specified in './sample.xml'. Then, paste the URL to the bin
   * below. This XML configuration code will read the message specified in messageToSend to the user when
   * the user is called and will record their response. You will then be able to find the recording under the
   * Recordings section of your Twilio console.
   */
  const twimlURL = 'YOUR URL';

	client.calls
    .create({
      url: `${twimlURL}?MessageToRead=${messageToSend}`,
      to: number,
      from: twilioNumber,
    })
    .then(call => console.log(call.sid));
};

module.exports.sendAutomatedTexts = sendAutomatedTexts;
module.exports.callNumber = callNumber;