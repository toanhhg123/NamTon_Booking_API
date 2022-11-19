const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/book.model");

const createBook = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Book.create(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBookByFilm = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findAll({ where: { filmId: id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllBookByRoom = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findAll({ where: { roomId: id } });
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
};
