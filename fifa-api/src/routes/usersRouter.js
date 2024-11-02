const usersRouter = require('express').Router()
const { userService } = require('../services')
const { validationResult } = require('express-validator')
const {
  userPostRules,
  userPutRules,
  idRules,
  userGetRules,
} = require('../utils/expressValidationRules')

usersRouter.get('/', userGetRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const where = request.query
  try {
    const result = await userService.getUsers(where)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

usersRouter.get('/:id', idRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const id = request.params.id
  try {
    const result = await userService.getUser(id)
    response.json(result)
  } catch (error) {
    response.status(500)
  }
})

usersRouter.put(
  '/:id',
  userPutRules.concat(idRules),
  async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
      return response.status('500').json({ error: errors.array() })
    }
    const id = request.params.id
    const objUser = request.body
    try {
      const newUser = await userService.updateUser({ id, objUser })
      response.json(newUser)
    } catch (error) {
      response.status(500).json({ message: error.message })
    }
  }
)

usersRouter.post('/', userPostRules, async (request, response) => {
  const errors = validationResult(request)
  if (!errors.isEmpty()) {
    return response.status('500').json({ error: errors.array() })
  }
  const objUser = request.body
  try {
    const newUser = await userService.createUser(objUser)
    response.status(201).json(newUser)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
})

module.exports = usersRouter
