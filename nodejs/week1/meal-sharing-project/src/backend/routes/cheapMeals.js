const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);

// // Respond with the json for all the meals that are cheap (you define what a cheap meal is)
const cheapMeals = meals.filter (el => {
  return el.price < 100;
});

router.get ('/', function (req, res) {
  res.json (cheapMeals);
});

module.exports = router;
