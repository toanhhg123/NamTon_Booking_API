const expressAsyncHandler = require("express-async-handler");
const md5 = require("md5");
const { ROLE } = require("./src/constanis");
const Film = require("./src/models/film.model");
const User = require("./src/models/user.model");

const seedDb = expressAsyncHandler(async (req, res) => {
  try {
    await User.sync({ alter: true });
    console.log("User model build success");
    await Film.sync({ alter: false });
    console.log("Film model build success");
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
