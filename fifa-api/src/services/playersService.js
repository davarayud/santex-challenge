const { playerProvider } = require('../providers')

const getPlayers = async (params) => await playerProvider.getPlayers(params)
const getPlayer = async (params) => await playerProvider.getPlayer(params)
const updatePlayer = async (params) => await playerProvider.updatePlayer(params)
const createPlayer = async (params) => await playerProvider.createPlayer(params)

module.exports = { getPlayers, getPlayer, updatePlayer, createPlayer }
