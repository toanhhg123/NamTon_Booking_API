const expressAsyncHandler = require("express-async-handler");
const md5 = require("md5");
const { ROLE } = require("../constanis");
const Cinema = require("../models/Cinema.model");
require("dotenv").config();

const createCinema = expressAsyncHandler(async (req, res) => {
  try {
    const { cinemaName, address } = req.body;

    const cinema = await Cinema.create({ cinemaName, address });
    return res.json(cinema);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllCinema = expressAsyncHandler(async (req, res) => {
  try {
    const cinemas = await Cinema.findAll();
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
};
