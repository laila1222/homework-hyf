const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
// Twilio Account related
const accountSid = process.env.account_sid;
const authToken = process.env.auth_token;
const client = require('twilio')(accountSid, authToken);
// Recieve sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// Phone numbers
const twilioNumber = process.env.twilio_number;
const myNumber = process.env.my_number;

router.use (bodyParser.json ());

// Send sms
client.messages
.create({
   body: 'Hello lilla. I am from server',
   // number bought from twilio
   from: twilioNumber,
   // your number
   to: myNumber
 })
.then(message => console.log(message.body));

router.post('/', (req, res) => {
    // look in re.body to see incoming message
    console.log(req.body);

    // response that you want to send back in response immediately
    const twiml = new MessagingResponse();
    twiml.message('I received your message.');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});



router.get('/', (req, res) => {
    res.send('hello from incoming sms');
})

module.exports = router;