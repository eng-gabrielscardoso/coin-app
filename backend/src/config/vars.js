const path = require('path')

require('dotenv-safe').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  examples: path.join(__dirname, '../../.env.example'),
})

module.exports = {
  PORT: process.env.PORT,
}
