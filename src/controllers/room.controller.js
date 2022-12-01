const expressAsyncHandler = require("express-async-handler");
const Cinema = require("../models/Cinema.model");
const { associations } = require("../models/rom.model");
const Room = require("../models/rom.model");

const createRoom = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Room.create(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllRoomByCinema = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Room.findAll({ where: { cinemaId: id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllRoom = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Room.findAll({ include: Cinema });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const deleteRoom = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Room.destroy({ where: { id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});
module.exports = {
  createRoom,
  deleteRoom,
  getAllRoomByCinema,
  getAllRoom,
};
