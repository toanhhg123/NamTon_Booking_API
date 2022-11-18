const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cluster = require("./cluster.model");

class Cinema extends Model {
  id;
  cinemaName;
  address;
  clusterId;
  img;
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
    clusterId: {
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
      beforeCreate: async (cinema) => {
        if (!(await Cluster.findByPk(cinema.getDataValue("clusterId"))))
          throw new Error("not found Cluster");
      },
    },
  }
);

module.exports = Cinema;
