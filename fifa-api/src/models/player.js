const { DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')

const Player = sequelize.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fifa_version: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fifa_update: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  player_face_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  long_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  player_positions: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  club_name: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
  nationality_name: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
  overall: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  potential: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  value_eur: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  wage_eur: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  height_cm: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  weight_kg: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  preferred_foot: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
  weak_foot: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_moves: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  international_reputation: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  work_rate: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
  body_type: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
  pace: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  shooting: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  passing: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  dribbling: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  defending: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  physic: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  attacking_crossing: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  attacking_finishing: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  attacking_heading_accuracy: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  attacking_short_passing: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  attacking_volleys: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_dribbling: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_curve: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_fk_accuracy: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_long_passing: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  skill_ball_control: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  movement_acceleration: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  movement_sprint_speed: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  movement_agility: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  movement_reactions: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  movement_balance: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  power_shot_power: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  power_jumping: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  power_stamina: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  power_strength: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  power_long_shots: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_aggression: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_interceptions: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_positioning: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_vision: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_penalties: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  mentality_composure: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  defending_marking: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  defending_standing_tackle: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  defending_sliding_tackle: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_diving: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_handling: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_kicking: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_positioning: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_reflexes: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  goalkeeping_speed: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  player_traits: {
    type: DataTypes.STRING(255),
    defaultValue: null,
  },
})

module.exports = Player
