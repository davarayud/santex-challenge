const express = require('express')
const cors = require('cors')
const { PORT } = require('./utils/config')
const {
  playersRouter,
  usersRouter,
  loginRouter,
  csvRouter,
} = require('./routes')
const { initializeDB } = require('./config/dbConfig')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/players', playersRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/csv', csvRouter)

const inicializar = async () => {
  await initializeDB()
  app.listen(PORT, () => {
    console.log(`SERVER UP en http://localhost:${PORT}`)
  })
}

inicializar()
