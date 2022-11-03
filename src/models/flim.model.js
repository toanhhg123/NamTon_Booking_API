const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");

class Flim extends Model {
  id;
  movieName;
  desc;
  actor;
  price;
  img;
  dateStart;
  dateEnd;
  country;
  flimStudio;
  version;
  genre;
  cinemaId;
  state;
}

Flim.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    movieName: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    actor: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    dateStart: {
      type: DataTypes.DATE,
    },
    dateEnd: {
      type: DataTypes.DATE,
    },
    country: {
      type: DataTypes.STRING,
    },
    flimStudio: {
      type: DataTypes.STRING,
    },
    version: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    cinemaId: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Flim;
