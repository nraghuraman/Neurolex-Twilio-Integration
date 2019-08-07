const express = require('express');
const twilio = require('../twilio/send-sms');
const router = express.Router();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

router.post('/smsforminformation', async function(req, res) {
  console.log(req.body);
  var numbers = req.body.numbers;
  var message = req.body.message;
  var frequency = req.body.frequency;
  var frequencyUnits = req.body.frequencyUnits;

  await twilio.sendAutomatedTexts(numbers, message, frequency, frequencyUnits);

  res.sendStatus(200);
});

router.post('/callforminformation', async function(req, res) {
  console.log(req.body);
  var number = req.body.number;
  var message = req.body.message;

  await twilio.callNumber(number, message);

  res.sendStatus(200);
});

router.post('/voicecallinformation', async function(req, res) {
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'Welcome to your SurveyLex survey!');

  res.type('text/xml');
  res.send(twiml.toString());
});

module.exports = router;
