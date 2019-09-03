
const express = require('express');
const app = express();
const fs = require('fs');

const mealsRouter = require('./routes/meals.js');

// app.use('/meals', mealsRouter);



// // Read and parse meals.json file
// // let rawDataMeals = fs.readFileSync(__dirname + '/data/meals.json', 'utf8');
// // let meals = JSON.parse(rawDataMeals);
// // console.log(meals);


// //Read and parse reservations.json file
// let rawDataReservations = fs.readFileSync(__dirname + '/data/reservation.json', 'utf8');
// let reservations = JSON.parse(rawDataReservations);
// // console.log(reservations);


// // // Respond with the json for all the meals
// // app.get('/meals', function (req, res) {
    
// //     res.send(meals);
// // })

// // Respond with the json for all the meals that are cheap (you define what a cheap meal is)
// const cheapMeals = meals.filter(el => {return el.price < 100});

// app.get('/cheap-meals', function(req, res) {
//     res.send(cheapMeals);
// })

// // Respond with the json for all the meals that can fit lots of people
// const mealsForManyPeople = meals.filter(el => {return el.maxNumberOfGuests > 6});

// app.get('/meals-for-many', function(req, res) {
//     res.send(mealsForManyPeople);
// })

// // Respond with the json for a random meal.
// //  If the meal has a reservation that matches its id, then add the email of that reservation to the json
// const randomMeal = meals[Math.floor(Math.random() * meals.length)];
// console.log(randomMeal);

// // check if meal has reservations -> go through reservations array, check if any matches with idofrandommeal
// const mealHasReservation = reservations.filter(res => res.mealId === randomMeal.id);
// console.log(mealHasReservation);
// const mealHasReservationName = mealHasReservation.name;


// function addEmailToMeal(mealHasReservation, randomMeal) {
//     // Check if there's any reservations, if yes -> collect emails in array, and add it to the random meal object
//     if (mealHasReservation && mealHasReservation.length) {
//         const emails = [];
//         mealHasReservation.forEach(res => {
//             emails.push(res.email);            
//         });
//         randomMeal.email = emails;
//         return randomMeal;
//     // If no reservations for the meal => just return randomMeal without e-mails
//     } else {
//         return randomMeal;
//     }
// }

// const loadRandomMealWithEmail = addEmailToMeal(mealHasReservation, randomMeal);


// app.get('/meal', (req, res) => {
//     res.send(loadRandomMealWithEmail);
// })

// // Respond with the json for all reservations
// app.get('/reservations', (req, res) => {
//     res.send(reservations);
// })

// // Respond with the json for a random reservation
// const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
// // console.log(randomReservation);

// app.get('/reservation', (req, res) => {
//     res.send(randomReservation);
// })










const server = app.listen(8081, function() {
  console.log("The app is listening");
})