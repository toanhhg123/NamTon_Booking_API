const expressAsyncHandler = require("express-async-handler");
const Banner = require("../models/banner.model");
require("dotenv").config();

const getBannerByFilmId = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Banner.findAll({ where: { filmId: id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const createBanner = expressAsyncHandler(async (req, res) => {
  try {
    const bannerNew = await Banner.create(req.body);
    return res.json(bannerNew);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const deleteBanner = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const num = await Banner.destroy({ where: { id } });
    return res.json(num);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

module.exports = {
  createBanner,
  deleteBanner,
  getBannerByFilmId,
};
