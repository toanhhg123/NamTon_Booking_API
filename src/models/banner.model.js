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
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    hooks: {
      beforeCreate: async (banner) => {
        if (!(await Film.findByPk(banner.getDataValue("filmId"))))
          throw new Error("not found Film");
      },
    },
  }
);

module.exports = Banner;
