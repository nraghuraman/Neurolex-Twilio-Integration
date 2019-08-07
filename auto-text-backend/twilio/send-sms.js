const accountSid = 'My accountSid, removed for security';
const authToken = 'My authToken, removed for security';
const client = require('twilio')(accountSid, authToken);
const schedule = require('node-schedule');

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
			     from: '+My Twilio number, removed for security',
			     to: numbersToSendTo[i],
			   })
			  .then(message => console.log(message.sid));
		}
	});
};

const callNumber = (number, message) => {
  const messageToSend = message.replace(/ /g, '+');

	client.calls
    .create({
      // The below url contains the TwiML specifications for the call, including that it will be recorded.
      // See sample.xml for the full XML which is used to configure the call.
      url: `https://handler.twilio.com/twiml/EHd6c8777ee2485a475b5bb3c1c5943780?MessageToRead=${messageToSend}`,
      to: number,
      from: '+My Twilio number, removed for security'
    })
    .then(call => console.log(call.sid));
};

module.exports.sendAutomatedTexts = sendAutomatedTexts;
module.exports.callNumber = callNumber;