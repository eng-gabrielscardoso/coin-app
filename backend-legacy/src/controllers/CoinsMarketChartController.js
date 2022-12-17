const api = require("../config/axios")

class CoinsMarketChartController {
  async index(req, res, next) {
    try {
      let { 
        coin, 
        currency, 
        period 
      } = req.params
  
      return await api
        .get(`/coins/${coin}/market_chart?vs_currency=${currency}&days=${period}`)
        .then(data => {
          res.send(data.data)
        })
        .catch(error => {
          res.send(error)
        })
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = new CoinsMarketChartController()
