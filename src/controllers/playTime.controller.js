const expressAsyncHandler = require("express-async-handler");
const Film = require("../models/film.model");
const PlayTime = require("../models/PlayTime.model");
const Room = require("../models/rom.model");
require("dotenv").config();

const getAllPlayTime = expressAsyncHandler(async (req, res) => {
  try {
    const playTimes = await PlayTime.findAll({ include: [Film, Room] });
    return res.json(playTimes);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const createPlayTime = expressAsyncHandler(async (req, res) => {
  try {
    const playTime = await PlayTime.create(req.body);
    return res.json(playTime);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

const updatePlayTime = expressAsyncHandler(async (req, res) => {
  try {
    const data = await PlayTime.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );

    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

module.exports = {
  createPlayTime,
  getAllPlayTime,
  updatePlayTime,
};
