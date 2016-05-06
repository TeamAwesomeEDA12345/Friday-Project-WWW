var request = require('request')

module.exports = function (commodity, doThisWithCom) {

  request('https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD.json?rows=10&api_key=UK4bR5Vk81b2pRMSRax1', function (err, response, body) {
    if (!err && response.statusCode == 200) {

      var parsedData = JSON.parse(body)
      var apiGoldData = parsedData.dataset.data

      var goldData = {'gold': []}

        for (var i =0; i<apiGoldData.length; i++){
          goldData["gold"].push({date: apiGoldData[i][0],price: apiGoldData[i][1] * 32 })
        }
      doThisWithCom(err, goldData)
    } else {
      doThisWithCom(err)
    }
  })
}

