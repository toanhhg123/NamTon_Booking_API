'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Film.init({
    cinemaId:DataTypes.INTEGER,
    movieName:DataTypes.STRING,
    discription: DataTypes.TEXT,
    actor:DataTypes.STRING,
    price:DataTypes.FLOAT,
    image:DataTypes.STRING,
    dateStart:DataTypes.DATE,
    dateEnd:DataTypes.DATE,
    country:DataTypes.STRING,
    filmStudio:DataTypes.STRING,
    version:DataTypes.STRING,
    genre:DataTypes.STRING,
    state:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};