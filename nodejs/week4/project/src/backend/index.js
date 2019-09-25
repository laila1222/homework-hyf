const express = require('express');
const app = express();
const localtunnel = require('localtunnel');
const dotenv = require('dotenv').config();

const port = process.env.port;
const subdomain = process.env.subdomain;
console.log(port, subdomain);
// const subdomain = {subdomain: 'happyfokas'}



const checkRouter = require('./routes/checkRouter.js');



app.use('/check', checkRouter);






app.get('/', (req, res) => {
    res.send('hello this is lilla');
});





app.listen(port, () => {
  console.log(`Server is up`)  
  const tunnel = localtunnel(port, subdomain, (err, tunnel) => {
    if (!err)
      console.log(`Tunnel is open on ${port}`, tunnel);      
    else
      console.log('Error opening tunnel: ', err);
  });
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });;
    
    


});


