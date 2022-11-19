const { Router } = require("express");
const {
  createBanner,
  deleteBanner,
  getBannerByFilmId,
} = require("../controllers/banner.controller");

const route = Router();

route.post("/create", createBanner);
route.delete("/delete/:id", deleteBanner);
route.get("/film/:id", getBannerByFilmId);

module.exports = route;
