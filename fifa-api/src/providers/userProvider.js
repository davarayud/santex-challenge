const { User } = require('../models')

const getUsers = async (where) => {
  try {
    const users = await User.findAll({
      where,
    })
    return users
  } catch (error) {
    throw error
  }
}

const getUser = async (id) => {
  try {
    const users = await User.findByPk(id)
    return users
  } catch (error) {
    throw error
  }
}

const createUser = async (objUser) => {
  try {
    const newUser = await User.create(objUser)
    return newUser
  } catch (error) {
    throw error
  }
}

const updateUser = async ({ id, objUser }) => {
  try {
    await User.update(objUser, { where: { id } })
    const newUser = await User.findByPk(id)
    if (!newUser) {
      throw new Error('Usuario no encontrado')
    }
    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = { getUsers, getUser, createUser, updateUser }
