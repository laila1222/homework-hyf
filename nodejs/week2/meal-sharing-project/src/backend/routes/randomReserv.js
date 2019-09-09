const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// //Read and parse reservations.json file
let rawDataReservations = fs.readFileSync (
  __dirname + '/../data/reservation.json',
  'utf8'
);
let reservations = JSON.parse (rawDataReservations);

// // Respond with the json for a random reservation
const randomReservation =
  reservations[Math.floor (Math.random () * reservations.length)];
// console.log(randomReservation);

router.get ('/', (req, res) => {
  res.send (randomReservation);
});

module.exports = router;
