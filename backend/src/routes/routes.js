const express = require('express')
const routes = express()

routes.get('/', async (req, res, next) => await res.json({ status: true }))

module.exports = routes
