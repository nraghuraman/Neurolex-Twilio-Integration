var express = require('express');
var twilio = require('../twilio/send-sms');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res, next) {
	res.render('helloworld', { title: 'Hello, world!' })
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});

router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/forminformation', async function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes]
    console.log(req.body);
    var numbers = req.body.numbers;
    var message = req.body.message;
    var frequency = req.body.frequency;
    var frequencyUnits = req.body.frequencyUnits;

    await twilio.sendAutomatedTexts(numbers, message, frequency, frequencyUnits);

    res.sendStatus(200);
});


    // await twilio.sendAutomatedTexts(numbers, message, frequency, frequencyUnits);

    // // Set our collection
    // var collection = db.get('usercollection');

module.exports = router;
