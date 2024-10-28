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
playersRouter.put('/', (request, response) => {})

//Create a vos como jugador:
playersRouter.post('/', (request, response) => {})

module.exports = playersRouter
