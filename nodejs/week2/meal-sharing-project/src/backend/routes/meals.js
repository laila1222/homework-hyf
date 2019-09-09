const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);
// console.log(meals);


router.get ('/', function (req, res) {
  res.json (meals);
});


router.get ('/:id', (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id, 10);
  let matchingMeal;
  let response;
  // Filter which meal matches with the id number 
  matchingMeal = meals.filter(meal =>  idNumber === meal.id);

  if (matchingMeal.length < 1) {
    // If no match (empty object)
    response = 'Meal id does not exist';
  } else {
    // If there is a match
    response = meals.filter(meal =>  idNumber === meal.id);
  }

  res.send(response);
})

module.exports = router;

// Add reviews to meals 
// console.log(meals);

// Read and parse reviews.json file
const rawDataReviews = fs.readFileSync(__dirname + '/../data/reviews.json', 'utf8');
const reviews = JSON.parse(rawDataReviews);
// console.log(reviews);

// Give reviews to the right meals according to meal_id
meals.forEach(meal => {
  meal.reviews = [];
  for (let review of reviews) {
    if (meal.id === review.meal_id) {
      meal.reviews = review;
    }
  }
})
