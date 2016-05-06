  module.exports = function(obj, database) {
  var worthsArray = database["worths"]
  var location
  worthsArray.filter(function(worthEntry, index){
    if (obj["id"] == worthEntry["id"]) {
      location = index
    }
  })
  return location
}
