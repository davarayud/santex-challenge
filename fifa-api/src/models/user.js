const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/dbConfig')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

User.prototype.toJSON = function () {
  let valores = { ...this.get() }
  delete valores.passwordHash
  delete valores.createdAt
  delete valores.updatedAt
  return valores
}

module.exports = User
