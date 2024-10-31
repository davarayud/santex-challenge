const loginRouter = require('express').Router()
const { userService } = require('../services')

loginRouter.post('/', async (request, response) => {
  const userAndPassword = request.body
  try {
    const result = await userService.login(userAndPassword)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

module.exports = loginRouter
