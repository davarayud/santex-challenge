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
    define: {
      tableName: 'players',
      timestamps: false,
    },
  }
)

module.exports = sequelize
