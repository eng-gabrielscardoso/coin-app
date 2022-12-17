const path = require('path')

if (process.env.NODE_ENV !== 'prod') {
  require('dotenv-safe').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    examples: path.join(__dirname, '../../.env.example'),
    silent: true,
    allowEmptyValues: true,
  })
}

module.exports = {
  PORT: process.env.PORT,
}
