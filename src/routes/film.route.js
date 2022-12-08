const { Router } = require("express");
const {
  getAllFilm,
  createFilm,
  deleteFilm,
  updateFilm,
} = require("../controllers/film.controller");

const route = Router();

route.post("/create", createFilm);
route.delete("/delete/:id", deleteFilm);
route.patch("/update/:id", updateFilm);

route.get("/", getAllFilm);

module.exports = route;
