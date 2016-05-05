var fs = require('fs')

module.exports = function(doThisWithDatabase){
  var database = ""

  fs.readFile(__dirname + "/../data/test-database.json", "UTF-8", function doThisAfter (err, database) {

  if(err) {
    doThisWithDatabase(err)
  } else {
    doThisWithDatabase(err, JSON.parse(database))
  }


  })
}






