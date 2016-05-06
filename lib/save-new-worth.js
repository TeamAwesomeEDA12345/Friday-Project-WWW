var fs = require('fs')
var getWorths = require('./get-worths.js')


module.exports = function (path, newWorthObject, doThisWithDatabase) {
  getWorths (path, function addNewObject (err,database) {
    newWorthObject.id = database["worths"].length+1
    database["worths"].push(newWorthObject)

    fs.writeFile(path, JSON.stringify(database), "UTF-8", function (err, res) {
      if (err) {
        doThisWithDatabase(err)
      } else {
        doThisWithDatabase(err, database)
      }
    })

  })
}




