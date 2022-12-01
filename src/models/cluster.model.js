const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cinema = require("./Cinema.model");

class Cluster extends Model {
  id;
  ClusterName;
  address;
  img;
}

Cluster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ClusterName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
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

module.exports = Cluster;
