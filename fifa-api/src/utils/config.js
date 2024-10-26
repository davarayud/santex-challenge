require('dotenv').config()

const PORT = process.env.PORT
const BASE_DE_DATOS = process.env.BASE_DE_DATOS
const USUARIO_DB = process.env.USUARIO_DB
const PASSWORD_USUARIO_DB = process.env.PASSWORD_USUARIO_DB
const HOST = process.env.HOST

module.exports = { PORT, BASE_DE_DATOS, USUARIO_DB, PASSWORD_USUARIO_DB, HOST }
