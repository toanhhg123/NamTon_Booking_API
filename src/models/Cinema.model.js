const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");

class Cinema extends Model {
  id;
  cinemaName;
  address;
}

Cinema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cinemaName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Cinema;
