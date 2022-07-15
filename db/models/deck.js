'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Card, {
        foreignKey: "deck_id"
      }),     
      this.belongsToMany(models.User, {
        through: models.Round,
        foreignKey: "deck_id"
      }),
      this.hasMany(models.Round, {
        foreignKey: "deck_id"
      })
    }
  }
  Deck.init({
    title: DataTypes.STRING,
    questions_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
