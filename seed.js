const expressAsyncHandler = require("express-async-handler");
const md5 = require("md5");
const { ROLE } = require("./src/constanis");
const Banner = require("./src/models/banner.model");
const Book = require("./src/models/book.model");
const Cinema = require("./src/models/Cinema.model");
const Cluster = require("./src/models/cluster.model");
const Comment = require("./src/models/comment.model");
const DisCount = require("./src/models/Discount.model");
const Film = require("./src/models/film.model");
const PlayTime = require("./src/models/PlayTime.model");
const Room = require("./src/models/rom.model");
const User = require("./src/models/user.model");

const seedDb = expressAsyncHandler(async (req, res) => {
  try {
    await User.sync({ force: true });
    console.log("User model build success");

    await Cluster.sync({ force: true });
    console.log("Cluster model build success");

    await Cinema.sync({ force: true });
    console.log("Cinema model build success");

    await Room.sync({ force: true });
    console.log("Room model build success");

    await Film.sync({ force: true });
    console.log("Film model build success");

    await PlayTime.sync({ force: true });
    console.log("Film model build success");

    await Comment.sync({ force: true });
    console.log("Comment model build success");

    await DisCount.sync({ force: true });
    console.log("Discount model build success");

    await Banner.sync({ force: true });
    console.log("Banner model build success");

    await Book.sync({ force: true });
    console.log("Book model build success");

    res.json("success");
  } catch (error) {
    console.log("fail build db", { error });
  }
});

const seedAdmin = expressAsyncHandler(async (req, res) => {
  try {
    const user = new User({
      username: "admin",
      password: md5("admin"),
      email: "admin@admin.com",
      address: "no address",
      phoneNumber: "113",
      date: "11/11/1911",
      role: ROLE.ADMIN,
    });

    await user.save();
    return res.json(user);
  } catch (error) {
    console.log("fail build db", { error });
  }
});

module.exports = {
  seedAdmin,
  seedDb,
};
