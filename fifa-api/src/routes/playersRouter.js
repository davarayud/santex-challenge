const playersRouter = require('express').Router()
const { playersService } = require('../services')

//Listado de jugadores:
playersRouter.get('/', async (request, response) => {
  const { limit, offset, ...where } = request.query
  try {
    const result = await playersService.getPlayers({ limit, offset, where })
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

//Obtener información de un solo jugador:
playersRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  try {
    const result = await playersService.getPlayer(id)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

//Editar la información de un jugador:
playersRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const objPlayer = request.body
  try {
    const newPlayer = await playersService.updatePlayer({ id, objPlayer })
    response.json(newPlayer)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

//Create a vos como jugador:
playersRouter.post('/', async (request, response) => {
  const objPlayer = request.body
  try {
    const newPlayer = await playersService.createPlayer(objPlayer)
    response.status(201).json(newPlayer)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

module.exports = playersRouter
