var express = require('express');
var router = express.Router();
var getWorths = require('../lib/get-worths.js')
var calculateWorth = require('../lib/calculate-worth.js')
var saveNewWorth = require('../lib/save-new-worth.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  // call save to DB function, parse new user object

  getWorths(__dirname + '/../data/database.json', function(err, datafromcalc){
    if(err) {
      throw err
    } else {

     calculateWorth(datafromcalc, function (err, obj){
      // if (err) {
      //   throw err
      // } else {
        res.render('index', obj);
      // }
    })
   }
 })
});

/* POST/UPDATE home page. */
router.post('/', function(req, res, next) {
  var newUser = req.body

  //call save New User To DB with params (newUserObj, callback)
  saveNewWorth(__dirname + '/../data/database.json', newUser, function(err, db){

      // call the function that calculates worth
      calculateWorth(db, function (err, obj){
        res.render('index', obj);
      })
    })
});


module.exports = router;
