const usersRouter = require('express').Router()
const { userService } = require('../services')

usersRouter.get('/', async (request, response) => {
  const where = request.query
  try {
    const result = await userService.getUsers(where)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

usersRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  try {
    const result = await userService.getUser(id)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

usersRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const objUser = request.body
  try {
    const newUser = await userService.updateUser({ id, objUser })
    response.json(newUser)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

usersRouter.post('/', async (request, response) => {
  const objUser = request.body
  try {
    const newUser = await userService.createUser(objUser)
    response.status(201).json(newUser)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

module.exports = usersRouter
