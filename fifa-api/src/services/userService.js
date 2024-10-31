const { userProvider } = require('../providers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET_JWT } = require('../utils/config')

const getUsers = async (params) => await userProvider.getUsers(params)
const getUser = async (params) => await userProvider.getUser(params)
const updateUser = async ({ id, objUser }) => {
  const user = objUser
  if (user.password) {
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(user.password, saltRounds)
    delete user.password
    objUser.passwordHash = passwordHash
  }

  return await userProvider.updateUser({ id, user })
}
const createUser = async (objUser) => {
  if (objUser.password === undefined) {
    throw new Error('Falta contraseña')
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(objUser.password, saltRounds)

  const user = {
    username: objUser.username,
    name: objUser.name,
    surname: objUser.surname,
    email: objUser.email,
    passwordHash: passwordHash,
  }
  return await userProvider.createUser(user)
}

const login = async ({ username, password }) => {
  console.log(username, password)

  const users = await userProvider.getUsers({ username })
  const user = users[0]
  if (!user) {
    throw new Error('Nombre de usuario invalido')
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash)
  if (!passwordCorrect) {
    console.log('pass')
    throw new Error('Contraseña invalida')
  }

  const userForToken = {
    username: user.username,
    id: user.id,
  }

  const token = jwt.sign(userForToken, SECRET_JWT)

  return {
    token,
    username: user.username,
    name: user.name,
    surname: user.surname,
    email: user.email,
  }
}

module.exports = { getUsers, getUser, updateUser, createUser, login }
