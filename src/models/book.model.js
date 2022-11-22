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

  // allows null
  paymentId;
  email;
  payerAddress;
  name;
  time;
  location;
  price;
  priceUnit;
  transacionHash;
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
    paymentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payerAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    priceUnit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    transacionHash: {
      type: DataTypes.STRING,
      allowNull: true,
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
