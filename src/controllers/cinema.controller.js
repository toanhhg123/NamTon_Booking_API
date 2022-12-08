const expressAsyncHandler = require("express-async-handler");
const md5 = require("md5");
const { ROLE } = require("../constanis");
const Cinema = require("../models/Cinema.model");
const Film = require("../models/film.model");
const Room = require("../models/rom.model");
require("dotenv").config();

const createCinema = expressAsyncHandler(async (req, res) => {
  try {
    const cinema = await Cinema.create(req.body);
    return res.json(cinema);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllCinema = expressAsyncHandler(async (req, res) => {
  try {
    const cinemas = await Cinema.findAll({
      include: [{ model: Film }, { model: Room }],
    });
    return res.json(cinemas);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const updateCinema = expressAsyncHandler(async (req, res) => {
  try {
    const cinema = await Cinema.update(
      { ...req.body },
      { where: { id: req.params.id } }
    );

    return res.json(cinema);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllCinemaByCluster = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const cinemas = await Cinema.findAll({ where: { clusterId: id } });
    return res.json(cinemas);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const deleteCinema = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const rowNumber = await Cinema.destroy({ where: { id } });
    return res.json(rowNumber);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

module.exports = {
  createCinema,
  getAllCinema,
  deleteCinema,
  getAllCinemaByCluster,
  updateCinema,
};
