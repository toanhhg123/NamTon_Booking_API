const expressAsyncHandler = require("express-async-handler");
const md5 = require("md5");
const { ROLE } = require("../constanis");
const User = require("../models/user.model");
var jwt = require("jsonwebtoken");
const JwtService = require("../services/jwt.service");
require("dotenv").config();

const register = expressAsyncHandler(async (req, res) => {
  try {
    const { username, password, email, phoneNumber, date, address } = req.body;

    //validate user
    if (
      (await User.findOne({ where: { email } })) ||
      (await User.findOne({ where: { phoneNumber } }))
    )
      throw new Error("email of phoneNumber is exsits");

    //crete user
    const user = new User({
      username,
      password: md5(password),
      email,
      phoneNumber,
      date,
      address,
      role: ROLE.USER,
    });
    await user.save();

    return res.json("Create user success");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const login = expressAsyncHandler(async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ where: { email } });

    // validate user
    if (!user) throw new Error("Email not found");
    if (user.dataValues.password !== md5(password))
      throw new Error("password not found");

    var token = JwtService.genarateToken({
      ...user.dataValues,
      password: null,
    });

    return res.json({
      userInfo: { ...user.dataValues, password: null },
      token: token,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const getAllUser = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.user);
    const users = await User.findAll({ attributes: { exclude: ["password"] } });

    return res.json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const num = await User.destroy({ where: { id } });
    if (!num) throw new Error("no colection is deleted");
    return res.json(num);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.user;

    const { email, password, date, address, phoneNumber, username } = req.body;
    const user = await User.findOne({ where: { id } });
    const data = user.dataValues;

    const updateUser = await User.update(
      {
        username: username || data.username,
        email: email || data.email,
        password: md5(password) || data.password,
        date: date || data.date,
        address: address || data.address,
        phoneNumber: phoneNumber || data.phoneNumber,
      },
      { where: { id } }
    );
    const usernew = await User.findOne({ where: { id } });

    // update
    // user.username = username || data.username;
    // user.email = email || data.email;
    // user.password = md5(password) || data.password;
    // user.date = date || data.date;
    // user.address = address || data.address;
    // user.phoneNumber = phoneNumber || data.phoneNumber;``````````
    var token = JwtService.genarateToken({
      ...usernew.dataValues,
      password: null,
    });

    return res.json({ token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = {
  register,
  login,
  getAllUser,
  deleteUser,
  updateUser,
};
