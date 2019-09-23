const express = require ('express');
const router = express.Router ();
const pool = require ('./../database');
const bodyParser = require ('body-parser');
const url = require('url');

router.use (bodyParser.json ());

// I am still trying to fix this part, in order to be able to use more queries at the same time
router.get ('/', (req, res) => {
  const availableReservations = req.query.availableReservations;
  const maxPrice = Number(req.query.maxPrice);

  const rawTitle = req.query.title;
  const title = rawTitle && `%${rawTitle}%`;

  const rawDate = req.query.createdAfter;
  const date = rawDate && new Date (rawDate + 'Z');

  const limit = Number(req.query.limit);

  // Available reservations
  if (availableReservations) {
    pool.query('select distinct * from meal inner join reservation on meal.id = reservation.meal_id where meal.max_reservations > reservation.number_of_guests;',(err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    })

  } else if (maxPrice) {
    // Sort by maxPrice
    pool.query("select * from meal where price <= ?;", maxPrice, (error, results, fields) => {
      if (error) {
        console.error(error);
      } else {
        res.send(results);
      }
      });

  }  else if (date) {
    // Meal created after a specific date
    pool.query('select * from meal where created_date > ?;', date, (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    });
    
  } else if (title) {
    // Sort by title
    pool.query( 'select * from meal where title like ?;', title, (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    });

  }  else if (limit) {
    // Limit
    pool.query('select * from meal limit ?;', limit, (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    });

  } else {
    pool.query('select * from meal;', (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    });
  }
});

// Post new meal
router.post ('/add-meal', (req, res) => {
  const meal = req.body;
  pool.query ('insert into meal set ?;', meal, (err, result, query) => {
    if (err) {
      console.error ('this is the error', err);
    } else {
      res.send ('Meal added');
    }
  });
});

// Get meal by id
router.get ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'select * from meal where id = ?;',
    mealId,
    (err, result, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send (result);
      }
    }
  );
});

// Update meal by id
router.put ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'update meal set title = ?, description = ?, location = ?, when = ?, max_reservations = ?, price = ?, created_date = ? where id = ?;',
    [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.when,
      req.body.max_reservations,
      req.body.price,
      req.body.created_date,
      mealId,
    ],
    (err, result, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send ('Meal has been updated.');
      }
    }
  );
});

// Delete meals by id
router.delete ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'delete from meal where id = ?;',
    mealId,
    (err, results, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send ('Meal has been deleted.');
      }
    }
  );
});

// Get meals that has smaller price than maxPrice
router.get ('/', (req, res) => {
  const maxPrice = req.query.maxPrice;
  pool.query (
    'select * from meal where price <= ?',
    maxPrice,
    (err, results, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send (results);
      }
    }
  );
});

module.exports = router;
