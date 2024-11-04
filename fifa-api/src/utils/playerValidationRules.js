const { body, param, query } = require('express-validator')

const playerPostRules = [
  // Strings con longitud máxima de 255 caracteres y que no pueden ser nulos
  body('fifa_version').escape().isString().isLength({ max: 255 }).notEmpty(),
  body('fifa_update').escape().isString().isLength({ max: 255 }).notEmpty(),
  body('long_name').escape().isString().isLength({ max: 255 }).notEmpty(),
  body('player_positions')
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),

  // Validación de URL para `player_face_url`
  body('player_face_url').isURL().notEmpty(),

  // Strings opcionales con longitud máxima de 255 caracteres
  body('club_name').optional().escape().isString().isLength({ max: 255 }),
  body('nationality_name')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 }),
  body('preferred_foot').optional().escape().isString().isLength({ max: 255 }),
  body('work_rate').optional().escape().isString().isLength({ max: 255 }),
  body('body_type').optional().escape().isString().isLength({ max: 255 }),
  body('player_traits').optional().escape().isString().isLength({ max: 255 }),

  // Enteros que no pueden ser nulos
  body('overall').escape().isNumeric().notEmpty(),
  body('potential').escape().isNumeric().notEmpty(),
  body('age').escape().isNumeric().notEmpty(),

  // Enteros opcionales
  body('value_eur').optional().escape().isNumeric(),
  body('wage_eur').optional().escape().isNumeric(),
  body('height_cm').optional().escape().isNumeric(),
  body('weight_kg').optional().escape().isNumeric(),
  body('weak_foot').optional().escape().isNumeric({ min: 1, max: 5 }), // Ejemplo: rango de valores permitido
  body('skill_moves').optional().escape().isNumeric({ min: 1, max: 5 }),
  body('international_reputation')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 5 }),

  // Atributos de rendimiento opcionales (puntuación del 1 al 100)
  body('pace').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('shooting').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('passing').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('dribbling').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('defending').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('physic').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de ataque opcionales
  body('attacking_crossing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_finishing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_heading_accuracy')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_short_passing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_volleys').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de habilidad opcionales
  body('skill_dribbling').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_curve').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_fk_accuracy').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_long_passing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('skill_ball_control')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de movimiento opcionales
  body('movement_acceleration')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_sprint_speed')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_agility').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('movement_reactions')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_balance').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de potencia opcionales
  body('power_shot_power').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_jumping').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_stamina').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_strength').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_long_shots').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de mentalidad opcionales
  body('mentality_aggression')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_interceptions')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_positioning')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_vision').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('mentality_penalties')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_composure')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de defensa opcionales
  body('defending_marking').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('defending_standing_tackle')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('defending_sliding_tackle')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de portero opcionales
  body('goalkeeping_diving')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_handling')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_kicking')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_positioning')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_reflexes')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_speed').optional().escape().isNumeric({ min: 1, max: 100 }),
]

const playerPutRules = [
  // Strings con longitud máxima de 255 caracteres y que no pueden ser nulos
  body('fifa_version')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  body('fifa_update')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  body('long_name')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  body('player_positions')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),

  // Validación de URL para `player_face_url`
  body('player_face_url').optional().isURL().notEmpty(),

  // Strings opcionales con longitud máxima de 255 caracteres
  body('club_name').optional().escape().isString().isLength({ max: 255 }),
  body('nationality_name')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 }),
  body('preferred_foot').optional().escape().isString().isLength({ max: 255 }),
  body('work_rate').optional().escape().isString().isLength({ max: 255 }),
  body('body_type').optional().escape().isString().isLength({ max: 255 }),
  body('player_traits').optional().escape().isString().isLength({ max: 255 }),

  // Enteros que no pueden ser nulos
  body('overall').optional().escape().isNumeric().notEmpty(),
  body('potential').optional().escape().isNumeric().notEmpty(),
  body('age').optional().escape().isNumeric().notEmpty(),

  // Enteros opcionales
  body('value_eur').optional().escape().isNumeric(),
  body('wage_eur').optional().escape().isNumeric(),
  body('height_cm').optional().escape().isNumeric(),
  body('weight_kg').optional().escape().isNumeric(),
  body('weak_foot').optional().escape().isNumeric({ min: 1, max: 5 }), // Ejemplo: rango de valores permitido
  body('skill_moves').optional().escape().isNumeric({ min: 1, max: 5 }),
  body('international_reputation')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 5 }),

  // Atributos de rendimiento opcionales (puntuación del 1 al 100)
  body('pace').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('shooting').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('passing').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('dribbling').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('defending').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('physic').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de ataque opcionales
  body('attacking_crossing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_finishing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_heading_accuracy')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_short_passing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('attacking_volleys').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de habilidad opcionales
  body('skill_dribbling').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_curve').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_fk_accuracy').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('skill_long_passing')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('skill_ball_control')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de movimiento opcionales
  body('movement_acceleration')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_sprint_speed')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_agility').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('movement_reactions')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('movement_balance').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de potencia opcionales
  body('power_shot_power').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_jumping').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_stamina').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_strength').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('power_long_shots').optional().escape().isNumeric({ min: 1, max: 100 }),

  // Atributos de mentalidad opcionales
  body('mentality_aggression')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_interceptions')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_positioning')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_vision').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('mentality_penalties')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('mentality_composure')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de defensa opcionales
  body('defending_marking').optional().escape().isNumeric({ min: 1, max: 100 }),
  body('defending_standing_tackle')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('defending_sliding_tackle')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),

  // Atributos de portero opcionales
  body('goalkeeping_diving')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_handling')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_kicking')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_positioning')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_reflexes')
    .optional()
    .escape()
    .isNumeric({ min: 1, max: 100 }),
  body('goalkeeping_speed').optional().escape().isNumeric({ min: 1, max: 100 }),
]

const playerGetRules = [
  query('limit').optional().escape().isNumeric().notEmpty(),
  query('offset').optional().escape().isNumeric().notEmpty(),
  query('fifa_version')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  query('long_name')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  query('player_positions')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 })
    .notEmpty(),
  query('club_name').optional().escape().isString().isLength({ max: 255 }),
  query('nationality_name')
    .optional()
    .escape()
    .isString()
    .isLength({ max: 255 }),
]

const playerIdRules = [
  param('id').isNumeric().withMessage('El id debe ser un numero'),
]

module.exports = {
  playerGetRules,
  playerPostRules,
  playerPutRules,
  playerIdRules,
}
