const { Router } = require("express");
const {
  getAllFilm,
  createFilm,
  deleteFilm,
} = require("../controllers/film.controller");

const route = Router();

route.post("/create", createFilm);
route.delete("/delete/:id", deleteFilm);

route.get("/", getAllFilm);

module.exports = route;
