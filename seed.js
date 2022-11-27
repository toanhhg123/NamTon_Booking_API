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
const Room = require("./src/models/rom.model");
const User = require("./src/models/user.model");

const seedDb = expressAsyncHandler(async (req, res) => {
  try {
    await User.sync({ alter: true });
    console.log("User model build success");

    await Cluster.sync({ alter: true });
    console.log("Cluster model build success");

    await Cinema.sync({ alter: true });
    console.log("Cinema model build success");

    await Room.sync({ alter: true });
    console.log("Room model build success");

    await Film.sync({ alter: true });
    console.log("Film model build success");

    await Comment.sync({ alter: true });
    console.log("Comment model build success");

    await DisCount.sync({ alter: true });
    console.log("Discount model build success");

    await Banner.sync({ alter: true });
    console.log("Banner model build success");

    await Book.sync({ alter: true });
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
