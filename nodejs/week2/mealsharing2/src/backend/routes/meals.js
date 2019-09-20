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

// Convert datestrings in meals.json to date format

meals.forEach (meal => {
  meal.createdAtDateFormat = new Date (meal.createdAt + 'Z');
});

// router.get ('/', function (req, res) {
//   res.json (meals);
// });

router.get ('/:id', (req, res) => {
  const id = req.params.id;
  const idNumber = Number (id);

  let response;
  // Filter which meal matches with the id number
  const mealMatchId = meals.filter (meal => idNumber === meal.id);

  if (mealMatchId.length < 1) {
    // If no match (empty object)
    response = 'Meal id does not exist';
  } else {
    // If there is a match
    response = mealMatchId;
  }
  res.send (response);
});

// Functions
const filterByPrice = (allMeals, maxPrice) => {
  if (!maxPrice) {
    return allMeals;
  }
  return meals.filter (meal => meal.price <= maxPrice);
  
}

function checkTitle (title, meals) {
  if (!title) {
    return meals;
}
  return  meals.filter (
    meal => meal.title.toLowerCase ().includes(title)
  );
}

function checkCreatedAfter (createdAfterDate, meals) {
  if (!createdAfterDate) {
    return meals;
  } else {
    return meals.filter (
      meal => meal.createdAtDateFormat.getTime () > createdAfterDate.getTime ()
    );
  }
}



function limitResults (limit, meals) {
  if (!limit) {
    return meals;
  } else {
    return meals.slice(0, limit);
  }
}


router.get ('/', function (req, res) {
  // Max price
  const maxPriceString = req.query.maxPrice;
  const maxPrice = Number(maxPriceString);

  // Title
  const rawTitle = req.query.title;
  // const title = rawTitle.replace(/"/g, "").toLowerCase().trim();
  const title = rawTitle && rawTitle.toLowerCase ().trim ();

  // Created after
  const createdAfterDateString = req.query.createdAfter;
  const createdAfterDate = createdAfterDateString && new Date (createdAfterDateString + 'Z');

  // Limit number of meals displayed
  const limitString = req.query.limit;
  const limitNumber = limitString && Number (limitString);
  console.log(limitNumber)

  // Filter with functions
  const priceFiltered = filterByPrice(meals, maxPrice);
  const titleFiltered = checkTitle(title, priceFiltered);
  const dateFiltered = checkCreatedAfter(createdAfterDate, titleFiltered);
  const limitNumberOfResults = limitResults(limitNumber, dateFiltered);


  res.json(limitNumberOfResults);
});



// Add reviews to meals

// Read and parse reviews.json file
const rawDataReviews = fs.readFileSync (
  __dirname + '/../data/reviews.json',
  'utf8'
);
const reviews = JSON.parse (rawDataReviews);

// Give reviews to the right meals according to meal_id
meals.forEach (meal => {
  meal.reviews = [];
  for (let review of reviews) {
    if (meal.id === review.meal_id) {
      meal.reviews = review;
    }
  }
});

// Functions

function checkTitle (title, filteredByPriceObj) {
  if (!title) {
    return filteredByPriceObj;
}
  return  filteredByPriceObj.filter (
    meal => meal.title.toLowerCase ().includes(title)
  );
}

module.exports = router;