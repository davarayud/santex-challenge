const { Op } = require('sequelize')
const { User } = require('../models')

const getUsers = async (whereOptions) => {
  const { username, name, surname, email } = whereOptions
  const where = {}
  if (username) where.username = { [Op.like]: `%${username}%` }
  if (name) where.name = { [Op.like]: `%${name}%` }
  if (surname) where.surname = { [Op.like]: `%${surname}%` }
  if (email) where.email = { [Op.like]: `%${email}%` }
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

const createUser = async (user) => {
  try {
    const newUser = await User.create(user)
    return newUser
  } catch (error) {
    throw error
  }
}

const updateUser = async ({ id, user }) => {
  try {
    await User.update(user, { where: { id } })
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
