const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

let rawDataReviews = fs.readFileSync (__dirname + '/../data/reviews.json', 'utf8');
let reviews = JSON.parse (rawDataReviews);

router.get ('/', (req, res) => {
  res.json (reviews);
});

router.get ('/:id', (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id);
  let response;

  const matchedReviews = reviews.filter(review => review.meal_id === idNumber);

  if(matchedReviews.length < 1) {
      response = 'There is no review for this meal, or meal does not exist.'
  } else {
      response = matchedReviews;
  }
  res.send (response);
})

module.exports = router;
