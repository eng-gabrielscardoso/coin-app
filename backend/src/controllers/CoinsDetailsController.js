const api = require("../config/axios")

class CoinsDetailsController {
  async index(req, res, next) {
    try {
      let { coin } = req.params
  
      return await api
        .get(`/coins/${coin}`)
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

module.exports = new CoinsDetailsController()
