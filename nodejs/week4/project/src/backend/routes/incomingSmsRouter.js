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
// Order class
const Order = require('../orderClass.js');
// Database
const pool = require ('./../database.js');

router.use (bodyParser.json ());
router.use(bodyParser.urlencoded({ extended: false }));



// Send sms
// client.messages
// .create({
//    body: 'Hello lilla. I am from server',
//    // number bought from twilio
//    from: twilioNumber,
//    // your number
//    to: myNumber
//  })
// .then(message => console.log(message.body));



function formatDates(date) {
    const day = date.getDate();
    const month = date.getMonth() +1;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

function getResultsFromDB (orderToDB) {
    let message = 'this is not the message i should be';
    
    
    
};



function checkFoodType(foodType) {
    let message;
    if (foodType === 'pizza' || foodType === 'burger' || foodType === 'salad') {
        try {
            const newOrder = new Order (foodType, 'ordered');
            const createdDateFormated = formatDates(newOrder.created);
            const modifiedDateFormated = formatDates(newOrder.modified);    
            const orderToDB = {
                type: newOrder.type,
                status: newOrder.status,
                created: createdDateFormated,
                modified: modifiedDateFormated
            }
            pool.query (
                'insert into orders set ?;', orderToDB, (err, results, fields) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('results are', results);
                        orderToDB.id = results.insertId;
                        console.log('order id is', results.insertId); 
                        message = `Your order is received. Your order id is: ${results.insertId}.`;
                        console.log('what i want is:', message);
                        
                        
                        
                    }
                    
                }
                
            )
            
        
        } catch (err) {
            res.status(400);
            next(err);
        }
    
    } 
    else {
        message = `We do not sell ${foodType}`; 
    };
    console.log(message);
    return message;

};


function checkResponseMsg (responseMessage) {
    let message;
    console.log(responseMessage[0]);
    if (responseMessage[0] === 'helpme') {
        console.log('asking for help');
        message = 'Commands are: menu, order, status';
        
    } else if (responseMessage[0] === 'menu') {
        message = 'Food types are: pizza, burger, salad';

    } 
    else if (responseMessage[0] === 'order') {
        const foodType = responseMessage[1];    
        console.log('it came through');
        console.log(foodType);
        message = checkFoodType(foodType);
        
        
    } 
    else {
        message = 'invalid message'
    }
    console.log('message is', message);
    return message;
}






router.post('/', (req, res) => {
    let message;
// Get message from postman/browser
    const msgFromPostMan = req.body.message.toLowerCase().split(' ');
    console.log(msgFromPostMan);

    message = checkResponseMsg(msgFromPostMan);
    console.log('final call', message);


    // Get message from phone
    // const responseMessage = req.body.Body.toLowerCase().split(' ');
    // console.log(responseMessage);
    // const twiml = new MessagingResponse();
    

    // checkResponseMsg(responseMessage);
    // console.log(responseMessage);

    // console.log('message is', message);
    // twiml.message('hello  its lilla');
    // res.writeHead(200, {'Content-Type': 'text/xml'});
    // res.end(twiml.toString()); 
    res.send(message);


});

// router.post('/', (req, res) => {
//     const twiml = new MessagingResponse();
//     console.log('hello')
//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// })





router.get('/orders', (req, res) => {
    const tableName ='orders2';
    pool.query (
        `select * from ${tableName};`, (err, results, fields) => {
            if (err) {
                console.error(err);
            } else {
                res.send(results);
            }
        }
    )
    // res.send('hello');
    // res.send('hello from incoming sms');
})

module.exports = router;