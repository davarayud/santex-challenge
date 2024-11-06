const { Op } = require('sequelize')
const { Player } = require('../models')

const getPlayers = async ({ limit = 10, offset = 0, options }) => {
  const {
    fifa_version,
    long_name,
    player_positions,
    club_name,
    nationality_name,
  } = options

  const where = {}
  if (fifa_version) where.fifa_version = fifa_version
  if (long_name) where.long_name = { [Op.like]: `%${long_name}%` }
  if (player_positions)
    where.player_positions = { [Op.like]: `%${player_positions}%` }
  if (club_name) where.club_name = { [Op.like]: `%${club_name}%` }
  if (nationality_name)
    where.nationality_name = { [Op.like]: `%${nationality_name}%` }

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

const getAllPlayers = async (options) => {
  const {
    fifa_version,
    long_name,
    player_positions,
    club_name,
    nationality_name,
  } = options

  const where = {}
  if (fifa_version) where.fifa_version = { [Op.like]: `%${fifa_version}%` }
  if (long_name) where.long_name = { [Op.like]: `%${long_name}%` }
  if (player_positions)
    where.player_positions = { [Op.like]: `%${player_positions}%` }
  if (club_name) where.club_name = { [Op.like]: `%${club_name}%` }
  if (nationality_name)
    where.nationality_name = { [Op.like]: `%${nationality_name}%` }

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
