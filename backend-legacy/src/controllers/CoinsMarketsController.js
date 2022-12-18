const api = require("../config/axios")

class CoinsMarketsController {
  async index(req, res, next) {
    try {
      let { currency } = req.params
  
      return await api
        .get(`/coins/markets?vs_currency=${currency}`)
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

module.exports = new CoinsMarketsController()
