const loginRouter = require('express').Router()
const { validationResult } = require('express-validator')
const { userService } = require('../services')
const { userLoginRules } = require('../utils/expressValidationRules')

loginRouter.post('/', userLoginRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const userAndPassword = request.body
  try {
    const result = await userService.login(userAndPassword)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

module.exports = loginRouter
