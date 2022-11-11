const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connect/sequelize");

class Comment extends Model {
  id;
  userId;
  content;
  filmId;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    filmId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Comment;
