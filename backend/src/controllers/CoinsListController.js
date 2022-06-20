const api = require("../config/axios")

class CoinsListController {
  async index(req, res, next) {
    return await api
      .get('/coins/list')
      .then(data => {
        res.send(data.data)
        res.sendStatus(200)
      })
      .catch(error => {
        res.send(error)
        res.sendStatus(500)
      })
  }
}

module.exports = new CoinsListController()
