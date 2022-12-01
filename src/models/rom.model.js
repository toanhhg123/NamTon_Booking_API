const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cinema = require("./Cinema.model");

class Room extends Model {
  id;
  RoomName;
  address;
  cinemaId;
  seat;
}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RoomName: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    cinemaId: {
      type: DataTypes.INTEGER,
      references: {
        model: "cinemas",
        key: "id",
      },
    },
    seat: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Room;
