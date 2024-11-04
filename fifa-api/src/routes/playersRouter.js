const playersRouter = require('express').Router()
const { playersService } = require('../services')
const { validationResult } = require('express-validator')
const {
  playerPostRules,
  playerPutRules,
  playerIdRules,
  playerGetRules,
} = require('../utils/expressValidationRules')

//Listado de jugadores:
playersRouter.get('/', playerGetRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const { limit, offset, ...options } = request.query

  try {
    const result = await playersService.getPlayers({ limit, offset, options })
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

//Obtener información de un solo jugador:
playersRouter.get('/:id', playerIdRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const id = request.params.id
  try {
    const result = await playersService.getPlayer(id)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

//Editar la información de un jugador:
playersRouter.put(
  '/:id',
  playerPutRules.concat(playerIdRules),
  async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status('500').json({ error: errors.array() })
    }
    const id = request.params.id
    const objPlayer = request.body
    try {
      const newPlayer = await playersService.updatePlayer({ id, objPlayer })
      response.json(newPlayer)
    } catch (error) {
      response.status(500).json({ message: error.message })
    }
  }
)

//Create a vos como jugador:
playersRouter.post('/', playerPostRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const objPlayer = request.body
  try {
    const newPlayer = await playersService.createPlayer(objPlayer)
    response.status(201).json(newPlayer)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

module.exports = playersRouter
