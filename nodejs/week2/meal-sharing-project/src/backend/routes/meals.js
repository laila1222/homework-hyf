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

router.get ('/', function (req, res) {
  // Max price
  const maxPriceString = req.query.maxPrice;
  const maxPrice = Number(maxPriceString);
  console.log(typeof(maxPrice));
  // Title
  const rawTitle = req.query.title;
  // const title = rawTitle.replace(/"/g, "").toLowerCase().trim();
  const title = rawTitle.toLowerCase ().trim ();

  // Created after
  const createdAfterDateString = req.query.createdAfter;
  const createdAfterDate = new Date (createdAfterDateString + 'Z');
  console.log(createdAfterDateString);

  // Limit number of meals displayed
  const limitInString = req.query.limit;
  const limitInNumber = Number (limitInString);


  // filter with functions
  const priceFiltered = checkMaxPrice (maxPrice);
  const titleFiltered = checkTitle (title, priceFiltered);
  const dateFiltered = checkCreatedAfter (createdAfterDate, titleFiltered);
  // console.log(dateFiltered);
  // console.log(dateFiltered.length);
  

  res.json (dateFiltered);
});

module.exports = router;

// Add reviews to meals
// console.log(meals);

// Read and parse reviews.json file
const rawDataReviews = fs.readFileSync (
  __dirname + '/../data/reviews.json',
  'utf8'
);
const reviews = JSON.parse (rawDataReviews);
// console.log(reviews);

// Give reviews to the right meals according to meal_id
meals.forEach (meal => {
  meal.reviews = [];
  for (let review of reviews) {
    if (meal.id === review.meal_id) {
      meal.reviews = review;
    }
  }
});

// Fucntions
function checkMaxPrice (maxPrice) {
  if (maxPrice) {
    const matchingMeals = meals.filter (meal => meal.price <= maxPrice);
    if (matchingMeals.length < 1) {
      return 'The maximum price is too low. We do not have so cheap meals.';
    } else {
      return matchingMeals;
    }
  } else {
    return meals;
  }
}

function checkTitle (title, filteredByPriceObj) {
  if (title) {
    const matchingMeals = filteredByPriceObj.filter (
      meal => meal.title.toLowerCase ().includes(title)
    );
    if (matchingMeals.length < 1) {
      return 'There is no meal with this title';
    } else {
      return matchingMeals;
    }
  } else {
    return filteredByPriceArr;
  }
}

function checkCreatedAfter (createdAfterDate, filteredByPriceAndTitleObj) {
  
  
  if (createdAfterDate) {
    const matchingMeals = filteredByPriceAndTitleObj.filter (
      meal => meal.createdAtDateFormat.getTime () > createdAfterDate.getTime ()
    );
    if (matchingMeals.length < 1) {
      return 'There is no meal after your date.';
    } else {
      return matchingMeals;
    }
  } else {
    return filteredByPriceAndTitleArr;
  }
}


const refreshSearchResults = () => {
  let filteredResults = 
}

// const filterByPrice = (allMeals, maxPrice) => {
//   if (!maxPrice) {
//     return allMeals;
//   }
//   return meals.filter (meal => meal.price <= maxPrice);
// }
// function addLimit (limitInNumber, filteredByPriceTitleDateArr) {

// }

// console.log(meals)

// just in case I need it
// Max Price
// const maxPrice = req.query.maxPrice;
// let resultFromPriceFilter;
// if (maxPrice) {
//   const matchingMeals = meals.filter(meal => meal.price < maxPrice);
//   if (matchingMeals.length < 1) {
//     resultFromPriceFilter = 'There is no meals with these filters';
//   } else {
//     resultFromPriceFilter = matchingMeals;
//   }

// } else {
//   resultFromPriceFilter = meals;
// }

// // Title
// // const rawTitle = req.query.title;
// // const title = rawTitle.replace(/"/g, "").toLowerCase().trim();
// // let resultFromTitleFilter;
// // console.log(title);

// // if (title) {
// //   const matchingMeals = meals.filter(meal => meal.title.toLowerCase() === title);
// //   if(matchingMeals.length < 1) {
// //     resultFromTitleFilter = 'There is no meal with this title';
// //   } else {
// //     resultFromTitleFilter = matchingMeals;
// //   }
// // } else {
// //   resultFromTitleFilter = meals;
// // }

// // Created after
// // const createdAfterDateString = req.query.createdAfter;
// // const createdAfterDate = new Date(createdAfterDateString + 'Z');
// // let resultFromDateFilter;

// // if(createdAfterDate) {
// //   const matchingMeals = meals.filter(meal => meal.createdAtDateFormat.getTime() > createdAfterDate.getTime() );
// //   if (matchingMeals.length < 1) {
// //     resultFromDateFilter = 'There is no meal after your date.'
// //   } else {
// //     resultFromDateFilter = matchingMeals;
// //   }
// // } else {
// //   resultFromDateFilter = meals;
// // }

// // Limit number of meals displayed
// const limitInString = req.query.limit;
// const limitInNumber = Number (limitInString);
// // console.log(limit);
// // console.log(typeof(limitInNumber));
// const displayMeals = meals;
// if (displayMeals.length > 4) {

// }
