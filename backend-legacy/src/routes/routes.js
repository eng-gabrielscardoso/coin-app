const express = require('express')
const routes = express()

const CoinsListController = require('../controllers/CoinsListController')
const CoinsDetailsController = require('../controllers/CoinsDetailsController')
const CoinsMarketsController = require('../controllers/CoinsMarketsController')
const CoinsMarketChartController = require('../controllers/CoinsMarketChartController')

routes.get('/', async (req, res, next) => await res.json({ running: true }))

routes.get('/list', CoinsListController.index)

routes.get('/details/:coin', CoinsDetailsController.index)

routes.get('/markets/:currency', CoinsMarketsController.index)

routes.get('/market_chart/:coin/:currency/:period', CoinsMarketChartController.index)

module.exports = routes
