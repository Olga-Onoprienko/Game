'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Deck, {
        foreignKey: "deck_id"
      })
    }
  }
  Round.init({
    user_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    total_guesses: DataTypes.INTEGER,
    first_guess_correct:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};
