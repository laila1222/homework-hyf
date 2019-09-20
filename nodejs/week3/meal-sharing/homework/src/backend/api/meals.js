const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");
const bodyParser = require('body-parser');

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

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  
  // const availableReservations = req.query.availableReservations;
  // if (availableReservations) {
  //   pool.query('select distinct * from meal inner join reservation on meal.id = reservation.meal_id where meal.max_reservations > reservation.number_of_guests;',(err, results, fields) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       res.send(results);
  //     }
  //   })
  // };

  // // Sort by maxPrice
  // const maxPrice = req.query.maxPrice;
  // pool.query("select * from meal where price <= ? and ;", maxPrice, (error, results, fields) => {
  // if (error) {
  //   console.error(error);
  // } else {
  //   res.send(results);
  // }
  // });

    // Sort by title
    // const title = `%${req.query.title}%`;
    // console.log(title);
    // pool.query( 'select * from meal where title like ?;', title, (err, results, fields) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     res.send(results);
    //   }
    // });

    // Meal created after a specific date
    // const date = req.query.createdAfter;
    // pool.query('select * from meal where created_date > ?;', date, (err, results, fields) => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     res.send(results);
    //   }
    // })
});

// Post new meal
router.post('/add-meal', (req, res) => {
  const meal = req.body;
  console.log(meal);
  pool.query('insert into meal set ?;', meal, (err, result, query) => {
    if (err) {
      console.error('this is the error', err);
    } else {
      res.send('Meal added');
    }
  })
});

// Get meal by id
router.get('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query('select * from meal where id = ?;', mealId, (err, result, query) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  })
});

// Update meal by id
router.put('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query('update `meal` set `title` = ?, `description` = ?, `location` = ?, `when` = ?, `max_reservations` = ?, `price` = ?, `created_date` = ? where id = ?;', [req.body.title, req.body.description, req.body.location, req.body.when, req.body.max_reservations, req.body.price, req.body.created_date, mealId], (err, result, query) => {
    if (err) {
      console.error(err);
    } else {
      res.send('Meal has been updated.')
    }
  })
});

// Delete meals by id
router.delete('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query('delete from meal where id = ?', mealId, (err, results, query) => {
    if (err) {
      console.error(err);
    } else {
      res.send('Meal has been deleted.');
    }
  })
});

// Get meals that has smaller price than maxPrice
router.get('/', (req, res) => {
  const maxPrice = req.query.maxPrice;
  console.log('hello');
  pool.query('select * from meal where price <= ?', maxPrice, (err, results, query) => {
    if (err) {
      console.error(err);
    } else {
      res.send(results);
    }
  })
})

module.exports = router;
