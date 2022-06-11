const axios = require('axios')

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3"
})

module.exports = api
