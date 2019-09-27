const express = require('express');
const app = express();
const localtunnel = require('localtunnel');
const dotenv = require('dotenv').config();


const port = process.env.port;
const subdomain = {subdomain: process.env.subdomain};



// Routers
const checkRouter = require('./routes/checkRouter.js');
const incomingSmsRouter = require('./routes/incomingSmsRouter.js');


// Paths and routers to use
app.use('/check', checkRouter);
app.use('/incoming-sms', incomingSmsRouter);
app.get('/', (req, res) => {
  console.log('hello');
})


// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ err });
})

// Server
app.listen(port, () => {
  console.log(`Server is up`, port);  
  const tunnel = localtunnel(port, subdomain, (err, tunnel) => {
    
    if (!err) 
      console.log(`Tunnel is open on ${port}`);      
    else
      console.log('Error opening tunnel: ', err);
  });
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });

});


