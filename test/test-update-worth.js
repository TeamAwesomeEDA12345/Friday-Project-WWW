var fs = require('fs')
var test = require('tape')
var getWorths = require('../lib/get-worths.js')
var updateWorths = require('../lib/update-worths.js')
var searchDatabase = require('../lib/search-database.js')


var newWorthObject = {
  "name": "Olly",
  "weight": 90.0,
  "id": 1,
}
var db = {"worths": [{"id": 1, "name": "Olly", "weight": 83.3 },{"id": 2, "name": "Jack", "weight": 76.3 },{"id": 3, "name": "Linda", "weight": 67.0 }]}

//reset database
fs.writeFile(__dirname + "/../data/test-database.json", JSON.stringify(db), "UTF-8", function afterReset(err){

  //Update Olly in database
  updateWorths(__dirname + "/../data/test-database.json", newWorthObject,  function  (err, res) {
    if(err) {
      throw err
    } else {
        test('updated weight in database is updated', function(t){

          if (err) {
            throw err
          } else {
            getWorths(__dirname + "/../data/test-database.json", function doThisWithDb (err, updatedDatabase){
              if (err) {
                throw err
              } else {

                t.equal(updatedDatabase[searchDatabase(newWorthObject, updatedDatabase)].weight, 90.0, "weight updated in database")
              }


            })
          }
          t.end()
        })
      }
    })
  })


