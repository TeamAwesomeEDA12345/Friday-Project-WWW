var fs = require('fs')

module.exports = function(newWorthObject, doThisWithDatabase){
  var database = ""
  // if(err) {
  //   doThisWithDatabase(err)
  // } else {
    doThisWithDatabase(false, true, {"worths": [{"id": 1, "name": "Olly", "weight": 83.3 },{"id": 2, "name": "Jack", "weight": 76.3 },{"id": 3, "name": "Linda", "weight": 67.0 }]})
  // }
}






