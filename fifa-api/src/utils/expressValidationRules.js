const {
  userGetRules,
  userPostRules,
  userPutRules,
  idRules,
  userLoginRules,
} = require('./userValidationRules')
const {
  playerGetRules,
  playerPostRules,
  playerPutRules,
  playerIdRules,
} = require('./playerValidationRules')

module.exports = {
  userPostRules,
  userPutRules,
  userGetRules,
  idRules,
  userLoginRules,
  playerGetRules,
  playerPostRules,
  playerPutRules,
  playerIdRules,
}
