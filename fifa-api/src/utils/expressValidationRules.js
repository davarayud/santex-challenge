const { body, param, query } = require('express-validator')

const userPostRules = [
  body('username')
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre de usuario debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El nombre de usuario debe tener entre 3 y 20 caracteres'),
  body('name')
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El nombre debe tener entre 3 y 20 caracteres'),
  body('surname')
    .escape()
    .isAlphanumeric()
    .withMessage('El apellido debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El apellido debe tener entre 3 y 20 caracteres'),
  body('email')
    .escape()
    .isEmail()
    .withMessage('Por favor, introduzca un correo válido'),
  body('password')
    .escape()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
    .withMessage(
      'La contraseña debe contener al menos 6 caracteres incluyendo 1 mayúscula, 1 minúscula y 1 número'
    ),
]

const userPutRules = [
  body('username')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre de usuario debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El nombre de usuario debe tener entre 3 y 20 caracteres'),
  body('name')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El nombre debe tener entre 3 y 20 caracteres'),
  body('surname')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El apellido debe contener solo letras y numero')
    .isLength({ min: 3, max: 25 })
    .withMessage('El apellido debe tener entre 3 y 20 caracteres'),
  body('email')
    .optional()
    .escape()
    .isEmail()
    .withMessage('Por favor, introduzca un correo válido'),
  body('password')
    .optional()
    .escape()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
    .withMessage(
      'La contraseña debe contener al menos 6 caracteres incluyendo 1 mayúscula, 1 minúscula y 1 número'
    ),
]

const userGetRules = [
  query('username')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre de usuario debe contener solo letras y numero'),
  query('name')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El nombre debe contener solo letras y numero'),
  query('surname')
    .optional()
    .escape()
    .isAlphanumeric()
    .withMessage('El apellido debe contener solo letras y numero'),
  query('email').optional().escape(),
]

const idRules = [
  param('id').isNumeric().withMessage('El id debe ser un numero'),
]

module.exports = { userPostRules, userPutRules, userGetRules, idRules }
