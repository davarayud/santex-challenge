const csvRouter = require('express').Router()
const { playersService } = require('../services')
const { json2csv } = require('json-2-csv')
const { playerGetRules } = require('../utils/expressValidationRules')
const { validationResult } = require('express-validator')

//Listado de jugadores:
csvRouter.get('/', playerGetRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const where = request.query

  try {
    const result = await playersService.getAllPlayers(where)
    const jsonResult = result.map((player) => player.toJSON())

    const csv = json2csv(jsonResult)

    response.header('Content-Type', 'text/csv')
    response.attachment('players.csv')
    response.send(csv)
  } catch (error) {
    response.status(500)
  }
})

module.exports = csvRouter
