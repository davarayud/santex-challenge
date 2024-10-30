const { userProvider } = require('../providers')
const bcrypt = require('bcrypt')

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

module.exports = { getUsers, getUser, updateUser, createUser }
