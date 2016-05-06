var fs = require('fs')
var test = require('tape')
var saveNewWorth = require('../lib/save-new-worth.js')
var getWorths = require('../lib/get-worths.js')


var newWorth = {
  "name": "Shayan",
  "weight": 78.0
}
var db = {"worths": [{"id": 1, "name": "Olly", "weight": 83.3 },{"id": 2, "name": "Jack", "weight": 76.3 },{"id": 3, "name": "Linda", "weight": 67.0 }]}

//reset database
fs.writeFile(__dirname + "/../data/test-database.json", JSON.stringify(db), "UTF-8", function afterReset(err){

//set expected length of database
getWorths(__dirname + "/../data/test-database.json",  function  (err, database) {
  if(err) {
    throw err
  } else {
    var expected = database["worths"].length + 1 || 0

    //run test adding new item to database, then measuring length and last item
    test('save new worth object to database', function(t){

      saveNewWorth(__dirname + "/../data/test-database.json", newWorth, function doThisAfterSaving (err, updatedDatabase) {
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



})


