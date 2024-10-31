const { Player } = require('../models')

const getPlayers = async ({ limit = 10, offset = 0, where }) => {
  try {
    const players = await Player.findAll({
      where,
      limit: parseInt(limit),
      offset: parseInt(offset),
    })
    return players
  } catch (error) {
    throw error
  }
}

const getPlayer = async (id) => {
  try {
    const players = await Player.findByPk(id)
    return players
  } catch (error) {
    throw error
  }
}

const createPlayer = async (objPlayer) => {
  try {
    const newPlayer = await Player.create(objPlayer)
    return newPlayer
  } catch (error) {
    throw error
  }
}

const updatePlayer = async ({ id, objPlayer }) => {
  try {
    await Player.update(objPlayer, { where: { id } })
    const newPlayer = await Player.findByPk(id)
    if (!newPlayer) {
      throw new Error('Player no encontrado')
    }
    return newPlayer
  } catch (error) {
    throw error
  }
}

const getAllPlayers = async (where) => {
  console.log(where)
  try {
    const players = await Player.findAll({
      where,
    })
    return players
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  getAllPlayers,
}
