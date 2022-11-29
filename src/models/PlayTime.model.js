const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cluster = require("./cluster.model");
const Film = require("./film.model");

class PlayTime extends Model {
  id;
  timeStart;
  filmId;
  roomId;
}

PlayTime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    timeStart: {
      type: DataTypes.DATE,
    },
    filmId: {
      type: DataTypes.INTEGER,
      references: {
        model: "films",
        key: "id",
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: "rooms",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = PlayTime;
