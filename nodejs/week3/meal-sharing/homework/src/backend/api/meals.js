const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {
  pool.query("select * from meal", function(error, results, fields) {
    // error will be an Error if one occurred during the query
    if (error) {
      console.error(error);
    } 

    // fields will contain information about the returned results fields (if any)
      // results will contain the results of the query
    
    response.json(results);
    
    
    
  });
});

module.exports = router;
