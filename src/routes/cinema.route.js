const { Router } = require("express");
const {
  createCinema,
  getAllCinema,
  deleteCinema,
} = require("../controllers/cinema.controller");

const route = Router();

route.post("/create", createCinema);
route.delete("/delete/:id", deleteCinema);
route.get("/", getAllCinema);

module.exports = route;
