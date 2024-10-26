const playersRouter = require('express').Router()
const { Player } = require('../models')

playersRouter.get('/', (request, response) => {
  Player.findAll({
    //where: { long_name: 'Lionel Andrés Messi Cuccittini' },
    limit: 10,
  })
    .then((result) => response.json(result))
    .catch((error) => console.error(error))
})

playersRouter.get('/:id', (request, response) => {
  Player.findByPk(request.params.id)
    .then((result) => response.json(result))
    .catch((error) => console.error(error))
})

module.exports = playersRouter
