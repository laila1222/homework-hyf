const express = require ('express');
const router = express.Router ();
// Database
const pool = require ('./../database.js');
const bodyParser = require ('body-parser');

router.use (bodyParser.json ());
router.use (bodyParser.urlencoded ({extended: false}));

router.get ('/order/:id', (req, res) => {
  const id = req.params.id;
  pool.query (
    'select * from orders where id = ?',
    id,
    (err, results, fields) => {
      if (err) {
        console.error (err);
      } else {
        console.log (results);
        res.send (results);
      }
    }
  );
});

module.exports = router;
