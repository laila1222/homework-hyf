const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);

// //Read and parse reservations.json file
let rawDataReservations = fs.readFileSync (
  __dirname + '/../data/reservation.json',
  'utf8'
);
let reservations = JSON.parse (rawDataReservations);

// // Respond with the json for a random meal.
const randomMeal = meals[Math.floor (Math.random () * meals.length)];
// console.log(randomMeal);

// // Check if meal has reservations -> go through reservations array, check if any matches with idofrandommeal
const mealHasReservation = reservations.filter (
  res => res.mealId === randomMeal.id
);
// console.log(mealHasReservation);
const mealHasReservationName = mealHasReservation.name;

function addEmailToMeal (mealHasReservation, randomMeal) {
  // Check if there's any reservations, if yes -> collect emails in array, and add it to the random meal object
  if (mealHasReservation && mealHasReservation.length) {
    const emails = [];
    mealHasReservation.forEach (res => {
      emails.push (res.email);
    });
    randomMeal.email = emails;
    return randomMeal;
    // If no reservations for the meal => just return randomMeal without e-mails
  } else {
    return randomMeal;
  }
}

const loadRandomMealWithEmail = addEmailToMeal (mealHasReservation, randomMeal);

router.get ('/', (req, res) => {
  res.send (loadRandomMealWithEmail);
});

module.exports = router;
