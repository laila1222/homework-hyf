const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// //Read and parse reservations.json file
let rawDataReservations = fs.readFileSync (__dirname + '/../data/reservation.json',  'utf8');
let reservations = JSON.parse (rawDataReservations);

// // Respond with the json for all reservations
router.get ('/', (req, res) => {
  res.json (reservations);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id);
  let response;

  const matchingRes = reservations.filter (reservation => idNumber === reservation.mealId);

  if (matchingRes.length < 1) {
    response = 'There is no reservation for this meal, or meal does not exist.'
  } else {
    response = matchingRes;
  }
  res.send(response);
})

module.exports = router;
