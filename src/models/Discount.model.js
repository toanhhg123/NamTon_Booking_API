const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cinema = require("./Cinema.model");
const Film = require("./film.model");

class DisCount extends Model {
  id;
  filmId;
  dateStart;
  dateEnd;
  img;
  percent;
}

DisCount.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dateStart: {
      type: DataTypes.DATE,
    },
    dateEnd: {
      type: DataTypes.DATE,
    },
    filmId: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
    percent: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    hooks: {
      beforeCreate: async (DisCount) => {
        if (!(await Film.findByPk(DisCount.getDataValue("filmId"))))
          throw new Error("not found Film");
      },
    },
  }
);

module.exports = DisCount;
