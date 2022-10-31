'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Premiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Premiere.init({
   filmId:DataTypes.INTEGER,
   roomId:DataTypes.INTEGER,
   day:DataTypes.DATE,
   hour:DataTypes.INTEGER,
   minute:DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Premiere',
  });
  return Premiere;
};