const api = require("../config/axios")

class CoinsDetailsController {
  async index(req, res, next) {
    try {
      let { coin } = req.params
  
      return await api
        .get(`/coins/${coin}`)
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

module.exports = new CoinsDetailsController()
