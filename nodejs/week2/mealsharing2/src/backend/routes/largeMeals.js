const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);

// // Respond with the json for all the meals that can fit lots of people
const mealsForManyPeople = meals.filter (el => {
  return el.maxNumberOfGuests > 6;
});

router.get ('/', function (req, res) {
  res.json (mealsForManyPeople);
});

module.exports = router;
