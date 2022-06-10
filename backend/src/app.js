const { PORT } = require('./config/vars')
const app = require('./config/server')

app.listen(PORT, async () => {
  try {
    await console.log(`Server running at port ${PORT}`)
  } catch(e) {
    await console.error(`Error running server: ${e}`)
  }
})

module.exports = app
