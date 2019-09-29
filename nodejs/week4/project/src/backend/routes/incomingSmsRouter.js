// Variables
const express = require ('express');
const router = express.Router ();
const dotenv = require ('dotenv').config ();
const bodyParser = require ('body-parser');
// Twilio Account related
const accountSid = process.env.account_sid;
const authToken = process.env.auth_token;
const client = require ('twilio') (accountSid, authToken);
// Recieve sms
const MessagingResponse = require ('twilio').twiml.MessagingResponse;
// Phone numbers
const twilioNumber = process.env.twilio_number;
const myNumber = process.env.my_number;
// Order class
const Order = require ('../orderClass.js');
// Database
const pool = require ('./../database.js');

router.use (bodyParser.json ());
router.use (bodyParser.urlencoded ({extended: false}));

// Send sms
client.messages
.create({
   body: 'Hello lilla. I am from server',
   // your number  
   from: myNumber,
   // number bought from twilio
   to: twilioNumber
 })
.then(message => console.log(message.body));

//  --- Functions ---
function sendResponse (res, message) {
  const twiml = new MessagingResponse();
  twiml.message(message);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}

function formatDates (date) {
  const day = date.getDate ();
  const month = date.getMonth () + 1;
  const year = date.getFullYear ();
  return `${year}-${month}-${day}`;
}

function checkFoodType (res, foodType) {
  let message;
  if (foodType === 'pizza' || foodType === 'burger' || foodType === 'salad') {
    try {
      const newOrder = new Order (foodType, 'ordered');
      const createdDateFormated = formatDates (newOrder.created);
      const modifiedDateFormated = formatDates (newOrder.modified);
      const orderToDB = {
        type: newOrder.type,
        status: newOrder.status,
        created: createdDateFormated,
        modified: modifiedDateFormated,
      };
      pool.query (
        'insert into orders set ?;',
        orderToDB,
        (err, results, fields) => {
          if (err) {
            console.error (err);
          } else {
            orderToDB.id = results.insertId;
            message = `Your order is received. Your order id is: ${results.insertId}.`;
            sendResponse (res, message);
          }
        }
      );
    } catch (err) {
      res.status (400);
      next (err);
    }
  } else if (!message) {
          message = 'Please enter a valid foodtype from our menu.';
          sendResponse(res, message);      
  } 
};

function sendStatus (res, id) {
    pool.query ('select * from orders where id = ?', id, (err, results, fields) => {
        if (err) {
            console.error(err);
        } else {
            console.log(results);
            message = `The status of your order is: ${results[0].status}. Last updated: ${results[0].modified}`;
            sendResponse(res, message);
        } 
    }
    )
}

function checkRequestMsg (res, responseMessage) {
  let message;
  if (responseMessage[0] === 'helpme') {
    message = 'Commands are: menu, order, status';
    sendResponse (res, message);
  } else if (responseMessage[0] === 'menu') {
    message = 'Food types are: pizza, burger, salad';
    sendResponse (res, message);
  } else if (responseMessage[0] === 'order') {
    const foodType = responseMessage[1];
    checkFoodType (res, foodType);
  } else if (responseMessage[0] === 'status') {
      const id = responseMessage[1];
    sendStatus(res, id);
  } else {
    message = 'invalid message';
    sendResponse (res, message);
  }
}

// Requests to router
router.post ('/', (req, res) => {
  let message;
  console.log(req.body);
  const requestMessage = req.body.Body.toLowerCase().split(' ');
  console.log(requestMessage);
  message = checkRequestMsg (res, requestMessage);
});

module.exports = router;
