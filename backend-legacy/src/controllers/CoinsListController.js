const api = require("../config/axios")

class CoinsListController {
  async index(req, res, next) {
    return await api
      .get('/coins/list')
      .then(data => {
        res.send(data.data)
      })
      .catch(error => {
        res.send(error)
      })
  }
}

module.exports = new CoinsListController()
