const { userProvider } = require('../providers')

const getUsers = async (params) => await userProvider.getUsers(params)
const getUser = async (params) => await userProvider.getUser(params)
const updateUser = async (params) => await userProvider.updateUser(params)
const createUser = async (params) => await userProvider.createUser(params)

module.exports = { getUsers, getUser, updateUser, createUser }
