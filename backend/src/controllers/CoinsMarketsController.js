const api = require("../config/axios")

class CoinsMarketsController {
  async index(req, res, next) {
    try {
      let { currency } = req.params
  
      return await api
        .get(`/coins/markets?vs_currency=${currency}`)
        .then(data => {
          res.send(data.data)
          res.sendStatus(200)
        })
        .catch(error => {
          res.send(error)
          res.sendStatus(500)
        })
    } catch (error) {
      res.send(error)
      res.sendStatus(500)
    }
  }
}

module.exports = new CoinsMarketsController()