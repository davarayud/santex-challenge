const express = require('express')
const { PORT } = require('./utils/config')
const { playersRouter, usersRouter } = require('./routes')
const { initializeDB } = require('./config/dbConfig')

const app = express()

app.use(express.json())
app.use('/api/players', playersRouter)
app.use('/api/users', usersRouter)

const inicializar = async () => {
  await initializeDB()
  app.listen(PORT, () => {
    console.log(`SERVER UP en http://localhost:${PORT}`)
  })
}

inicializar()
