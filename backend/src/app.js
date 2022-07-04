const { PORT } = require('./config/vars')
const app = require('./config/server')

app.listen(process.env.NODE_ENV !== 'prod' ? PORT : 8082, async () => {
  try {
    await console.log(`Server running at port ${PORT || 8082}`)
  } catch(e) {
    await console.error(`Error running server: ${e}`)
  }
})

module.exports = app
