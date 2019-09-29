const express = require ('express');
const router = express.Router ();
const bodyParser = require ('body-parser');
const pool = require ('./../database.js');
// Recieve sms
const MessagingResponse = require ('twilio').twiml.MessagingResponse;
const twiml = new MessagingResponse();

router.use (bodyParser.json ());
router.use (bodyParser.urlencoded ({extended: false}));

// Get order by id
router.get ('/order/:id', (req, res) => {
  const id = req.params.id;
  pool.query (
    'select * from orders where id = ?',
    id,
    (err, results, fields) => {
      if (err) {
        console.error (err);
      } else {
        res.send (results);
      }
    }
  );
});

// Update order status by id
router.patch('/order/:id', (req, res) => {
    const id = req.params.id;
    pool.query(`update orders set status = 'ready' where id = ?;`, id, (err, results, fields) => {
        if (err) {
            console.error(err);
        } else {
            const message = `Order ${id} is ready.`
            twiml.message(message);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        }
    })
})

module.exports = router;
