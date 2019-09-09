// Variables
const express = require ('express');
const app = express ();

// Routers
const mealsRouter = require ('./routes/meals.js');
const reservationRouter = require ('./routes/reservations.js');
const cheapMealsRouter = require ('./routes/cheapMeals.js');
const largeMealsRouter = require ('./routes/largeMeals.js');
const randomMealRouter = require ('./routes/randomMeal.js');
const randomReservationRouter = require ('./routes/randomReserv.js');

app.use ('/meals', mealsRouter);
app.get ('/reservations', reservationRouter);
app.get ('/cheapmeals', cheapMealsRouter);
app.get ('/largemeals', largeMealsRouter);
app.get ('/meal', randomMealRouter);
app.get ('/reservation', randomReservationRouter);

// New routes

// Server
const server = app.listen (3001, function () {
  console.log ('The app is listening at 3001');
});
