
const express = require('express');
const app = express();
const fs = require('fs');

const mealsRouter = require('./routes/meals.js');
const reservationRouter = require('./routes/reservations.js');
const cheapMealsRouter = require('./routes/cheapMeals.js');
const largeMealsRouter = require('./routes/largeMeals.js');
const randomMealRouter = require('./routes/randomMeal.js');


app.use('/meals', mealsRouter);
app.use('/reservations', reservationRouter);
app.use('/cheapmeals', cheapMealsRouter);
app.use('/largemeals', largeMealsRouter);
app.use('/meal', randomMealRouter);











// // Respond with the json for a random reservation
// const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
// // console.log(randomReservation);

// app.get('/reservation', (req, res) => {
//     res.send(randomReservation);
// })










const server = app.listen(8082, function() {
  console.log("The app is listening");
})