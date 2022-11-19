const { Router } = require("express");
const {
  createCluster,
  deleteCluster,
  getAllCluster,
} = require("../controllers/cluster.controller");

const route = Router();

route.post("/create", createCluster);
route.delete("/delete/:id", deleteCluster);
route.get("/", getAllCluster);

module.exports = route;
