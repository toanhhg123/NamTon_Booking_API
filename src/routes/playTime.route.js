const { Router } = require("express");
const { ROLE } = require("../constanis");
const {
  getAllPlayTime,
  createPlayTime,
} = require("../controllers/playTime.controller");

const authorize = require("../middlewares/auth.middleware");

const route = Router();

route.get("/", getAllPlayTime);
route.post("/create", createPlayTime);

module.exports = route;
