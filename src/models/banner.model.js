const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cluster = require("./cluster.model");
const Film = require("./film.model");

class Banner extends Model {
  id;
  filmId;
  img;
}

Banner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filmId: {
      type: DataTypes.INTEGER,
      references: {
        model: "films",
        key: "id",
      },
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Banner;
