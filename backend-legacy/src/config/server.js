const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const routes = require('../routes/routes')

const server = express()

server.use(morgan('dev'))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(cors())

server.use(routes)

module.exports = server
