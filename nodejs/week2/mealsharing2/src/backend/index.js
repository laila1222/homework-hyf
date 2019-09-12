// Variables
const express = require ('express');
const app = express ();
const fs = require('fs');



// Routers
const mealsRouter = require ('./routes/meals.js');
const reservationRouter = require ('./routes/reservations.js');
const cheapMealsRouter = require ('./routes/cheapMeals.js');
const largeMealsRouter = require ('./routes/largeMeals.js');
const randomMealRouter = require ('./routes/randomMeal.js');
const randomReservationRouter = require ('./routes/randomReserv.js');

// Homework - week 2
const reviewsRouter = require ('./routes/reviews.js');
const mealsIdRouter = require ('./routes/meals-id.js');
const reservationsIdRouter = require ('./routes/reservations-id.js');


// Homework - week 2
app.use ((req, res, next) => {
  let time = new Date ();
  time = `${time.getFullYear()}-${time.getMonth () + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()} request received for path: ${req.url}`;
  console.log(time);
  next ();
});


app.use ('/meals', mealsRouter);
app.use ('/reservations', reservationRouter);
app.use ('/cheapmeals', cheapMealsRouter);
app.use ('/largemeals', largeMealsRouter);
app.use ('/meal', randomMealRouter);
app.use ('/reservation', randomReservationRouter);

// Homework - week 2
app.use ('/meals/:id', mealsIdRouter);
app.use ('/reservations/:id', reservationsIdRouter);
app.use ('/reviews', reviewsRouter);  

// Error handling
app.use ((err, req, res, next) => {
  console.error (err.stack);
  res.status (500).send (`You got the following error: ${err.stack}`);
});

// Server
const server = app.listen (3014, function () {
  console.log ('The app is listening at 3014');
});
