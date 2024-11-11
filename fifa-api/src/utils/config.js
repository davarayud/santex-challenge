require('dotenv').config()

const PORT = process.env.PORT || 3003
const BASE_DE_DATOS = process.env.BASE_DE_DATOS || 'fifa_local'
const USUARIO_DB = process.env.USUARIO_DB || 'root'
const PASSWORD_USUARIO_DB = process.env.PASSWORD_USUARIO_DB || 'root'
const HOST = process.env.HOST || 'localhost'
const SECRET_JWT = process.env.SECRET_JWT || 'Palabra secreta'

module.exports = {
  PORT,
  BASE_DE_DATOS,
  USUARIO_DB,
  PASSWORD_USUARIO_DB,
  HOST,
  SECRET_JWT,
}
