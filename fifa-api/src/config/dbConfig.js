const { Sequelize } = require('sequelize')
const {
  BASE_DE_DATOS,
  USUARIO_DB,
  PASSWORD_USUARIO_DB,
  HOST,
} = require('../utils/config')

const sequelize = new Sequelize(
  BASE_DE_DATOS,
  USUARIO_DB,
  PASSWORD_USUARIO_DB,
  {
    host: HOST,
    dialect: 'mysql',
  }
)

const initializeDB = async () => {
  try {
    await sequelize.authenticate()
    console.log(`Conectado a ${BASE_DE_DATOS}`)
    const {} = require('../models')
    await sequelize.sync({ force: false })
  } catch (error) {
    console.error('Hubo un error al inicializar la base de datos')
  }
}

module.exports = { sequelize, initializeDB }
