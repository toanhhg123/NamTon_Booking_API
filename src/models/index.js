const Banner = require("./banner.model");
const Cluster = require("./cluster.model");
const Cinema = require("./Cinema.model");
const Room = require("./rom.model");
const Film = require("./film.model");
const PlayTime = require("./PlayTime.model");
const Book = require("./book.model");
const User = require("./user.model");

const createassociation = () => {
  Cluster.hasMany(Cinema);
  Cinema.hasMany(Film);
  Cinema.hasMany(Room);
  Room.belongsTo(Cinema);

  Film.hasMany(Banner);
  Film.hasMany(PlayTime);

  Book.belongsTo(PlayTime);
  Book.belongsTo(User);

  //playTime

  PlayTime.belongsTo(Film);
  PlayTime.belongsTo(Room);
};

module.exports = {
  createassociation,
};
