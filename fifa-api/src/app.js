const express = require('express')
const { PORT } = require('./utils/config')
const { playersRouter } = require('./routes')

const app = express()

app.use('/api/players', playersRouter)

app.listen(PORT, () => {
  console.log(`SERVER UP en http://localhost:${PORT}`)
})
