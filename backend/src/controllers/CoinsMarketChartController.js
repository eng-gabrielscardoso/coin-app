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
            .sendStatus(200)
        })
        .catch(error => {
          res.send(error)
            .sendStatus(500)
        })
    } catch (error) {
      res.send(error)
        .sendStatus(500)
    }
  }
}

module.exports = new CoinsMarketChartController()
