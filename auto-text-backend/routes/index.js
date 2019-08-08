const express = require('express');
const twilio = require('../twilio/twilio-functions');
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

module.exports = router;
