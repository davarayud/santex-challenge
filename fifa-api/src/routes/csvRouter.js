const csvRouter = require('express').Router()
const { playersService } = require('../services')
const { json2csv } = require('json-2-csv')

//Listado de jugadores:
csvRouter.get('/', async (request, response) => {
  const where = request.query
  console.log(where)
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
