const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/book.model");
const Film = require("../models/film.model");
const PlayTime = require("../models/PlayTime.model");
const Room = require("../models/rom.model");
const User = require("../models/user.model");

const createBook = expressAsyncHandler(async (req, res) => {
  try {
    const { playTimeId, seatIndex } = req.body;

    if (await Book.findOne({ where: { playTimeId, seatIndex } })) {
      throw new Error("This place is already occupied");
    }
    const data = await Book.create(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBookByFilm = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findAll({
      where: { filmId: id },
      include: [{ model: PlayTime }, { model: User }],
    });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBook = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Book.findAll({
      include: [{ model: PlayTime, include: Room }, { model: User }],
    });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBookByRoom = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findAll({
      where: { roomId: id },
      include: [{ model: PlayTime, include: Room }, { model: User }],
    });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBookById = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findAll({ where: { id: id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const deteteBook = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.destroy({ where: { id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

module.exports = {
  createBook,
  deteteBook,
  getAllBookByFilm,
  getAllBookByRoom,
  getAllBookById,
  getAllBook,
};
