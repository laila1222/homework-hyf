const express = require('express');
const app = express();
const localtunnel = require('localtunnel');
const dotenv = require('dotenv').config();
const port = process.env.port;
const subdomain = {subdomain: process.env.subdomain};

app.use('/public', express.static('public'))
app.use((req, res, next) => {
  const { url, method } = req;
  console.log(`${method} ${url}`);
  next();
});

// Routers
const checkRouter = require('./routes/checkRouter.js');
const incomingSmsRouter = require('./routes/incomingSmsRouter.js');
const kitchenRouter = require('./routes/kitchenRouter.js');
const customerRouter = require('./routes/customerRouter.js');

// Paths and routers to use
app.use('/check', checkRouter);
app.use('/incoming-sms', incomingSmsRouter);
app.use('/kitchen', kitchenRouter);
app.use('/customer', customerRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ err });
})

// Server
app.listen(port, () => {
  console.log(`Server is up`, port);  
  // const tunnel = localtunnel(port, subdomain, (err, tunnel) => {
    
  //   if (!err) 
  //     console.log(`Tunnel is open on ${port}`);      
  //   else
  //     console.log('Error opening tunnel: ', err);
  // });
  
  // tunnel.on('close', function() {
  //   // When the tunnel is closed
  //   console.log('Tunnel is closed');
  // });

});


