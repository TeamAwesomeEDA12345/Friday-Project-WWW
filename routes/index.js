var express = require('express');
var router = express.Router();

var calculateWorth = require('../lib/calculate-worth.js')
var saveNewWorth = require('../lib/save-new-worth.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  // call save to DB function, parse new user object


  res.render('index', { title: 'Worth Your Weight' });
});

/* POST/UPDATE home page. */
router.post('/', function(req, res, next) {
  var newUser = req.body

  //call save New User To DB with params (newUserObj, callback)
  saveNewWorth(__dirname + '/../data/database.json', newUser, function(err, db){
    console.log(db.worths[0].weight, "this is the thing")
      // call the function that calculates worth
      calculateWorth(db, function (err, obj){
        res.render('index', obj);
      })
  })
});


module.exports = router;
