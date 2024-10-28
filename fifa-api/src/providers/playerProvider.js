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

module.exports = { getPlayers, getPlayer }
