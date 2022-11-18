const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");
const Cluster = require("./cluster.model");
const Film = require("./film.model");

class Book extends Model {
  id;
  filmId;
  userId;
  dateStart;
  roomId;
  seatIndex;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dateStart: {
      type: DataTypes.DATE,
    },
    filmId: {
      type: DataTypes.INTEGER,
    },
    seatIndex: {
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
      beforeCreate: async (book) => {
        if (!(await Film.findByPk(book.getDataValue("filmId"))))
          throw new Error("not found Film");

        if (
          await Book.findOne({
            where: {
              roomId: book.getDataValue("roomId"),
              seatIndex: book.getDataValue("seatIndex"),
            },
          })
        )
          throw new Error("seat is exist");
      },
    },
  }
);

module.exports = Book;
