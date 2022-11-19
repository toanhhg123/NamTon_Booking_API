const { Router } = require("express");
const {
  createCinema,
  getAllCinema,
  deleteCinema,
  getAllCinemaByCluster,
} = require("../controllers/cinema.controller");

const route = Router();

route.post("/create", createCinema);
route.delete("/delete/:id", deleteCinema);
route.get("/cluster/:id", getAllCinemaByCluster);

route.get("/", getAllCinema);

module.exports = route;
