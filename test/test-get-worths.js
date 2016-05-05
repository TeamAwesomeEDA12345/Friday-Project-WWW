var test = require('tape')
var getWorths = require('../lib/get-worths.js')


var expected = require('../data/test-database.json')

test("test database is read and returned", function(t){
  getWorths( function  (err, database) {
    if(err) {
      throw err
    } else {
      console.log(database)
      t.deepEqual(database, expected, "Database is returned")
    }
  })
  t.end()




})
