var fs = require('fs')
var test = require('tape')
var saveNewWorth = require('../lib/save-new-worth.js')
var getWorths = require('../lib/get-worths.js')


var newWorth = {
  "name": "Shayan",
  "weight": 78.0
}

//set expected length of database
getWorths( function  (err, database) {
  console.log("hello")
  if(err) {
    throw err
  } else {
    var expected = 2//database["worths"].length + 1 || 0

    //run test adding new item to database, then measuring length and last item
    test('save new worth object to database', function(t){

      saveNewWorth(newWorth, function doThisAfterSaving (err, response, updatedDatabase) {
        if (err) {
          throw err
        } else {
          t.equal(updatedDatabase["worths"].length, expected, "database length increases by 1")
          t.deepEqual(updatedDatabase["worths"].pop(), newWorth, "last entry in data base is the new entry")
        }
      })
      t.end()
    })
  }

})
