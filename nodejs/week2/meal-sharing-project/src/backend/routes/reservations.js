const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// //Read and parse reservations.json file
let rawDataReservations = fs.readFileSync (
  __dirname + '/../data/reservation.json',
  'utf8'
);
let reservations = JSON.parse (rawDataReservations);
// console.log(reservations);

// // Respond with the json for all reservations
router.get ('/', (req, res) => {
  res.json (reservations);
});

module.exports = router;
