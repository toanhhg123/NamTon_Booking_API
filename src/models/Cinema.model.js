const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cluster = require("./cluster.model");
const Film = require("./film.model");
const Room = require("./rom.model");

class Cinema extends Model {
  id;
  cinemaName;
  address;
  img;
  clusterId;
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

    img: {
      type: DataTypes.STRING,
    },
    clusterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Clusters",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    hooks: {
      // beforeCreate: async (cinema) => {
      //   if (!(await Cluster.findByPk(cinema.getDataValue("clusterId"))))
      //     throw new Error("not found Cluster");
      // },
    },
  }
);

module.exports = Cinema;
