var fs = require('fs')
var getWorths = require('./get-worths.js')
var searchDatabase = require('./search-database.js')
module.exports = function(path,newWorthObject, doAfterUpdated) {

  getWorths(path, function doThisWithDatabase (err, existingDatabase) {
    var location = searchDatabase(newWorthObject, existingDatabase)
    console.log("pigs may fly")
    existingDatabase[location] = newWorthObject

    fs.writeFile(path, JSON.stringify(existingDatabase), "UTF-8", function doAfter(err, response){
      if (err) {
        doAfterUpdated(err)
      } else {
        doAfterUpdated(err, true)
      }
    })
  })
}


