'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingTicket.init({
   quantity:DataTypes.INTEGER,
   total:DataTypes.FLOAT,
   username:DataTypes.STRING,
   phonenumber:DataTypes.STRING,
   email:DataTypes.STRING,
   bookingDate:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookingTicket',
  });
  return BookingTicket;
};