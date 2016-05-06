
var commodityObj = require('../apiData/getComs.js')


module.exports = function (allUsers, doThisWithWorth) {
  commodityObj("gold", function(err, comObj){

    if (err) {
      throw err
    } else {

      var worthsForAllUsers = []
      var priceToday = comObj.gold[0].price

      for (var i = 0; i < allUsers.worths.length; i++) {
       allUsers.worths[i].value =  allUsers.worths[i].weight * priceToday
      }

      return allUsers
    }
  })
}

