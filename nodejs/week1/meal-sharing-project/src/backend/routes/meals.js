
const express = require('express');
const router = express.Router();
const fs = require('fs');


module.exports = mealsRouter;
// Read and parse meals.json file
let rawDataMeals = fs.readFileSync(__dirname + '/../data/meals.json', 'utf8');
let meals = JSON.parse(rawDataMeals);
// console.log(meals);


// Middleware function
router.get('/meals', function (req, res) {
    res.json(meals);
})


