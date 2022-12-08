const { Router } = require("express");
const {
  createCluster,
  deleteCluster,
  getAllCluster,
  updateCluster,
} = require("../controllers/cluster.controller");

const route = Router();

route.post("/create", createCluster);
route.delete("/delete/:id", deleteCluster);
route.patch("/update/:id", updateCluster);

route.get("/", getAllCluster);

module.exports = route;
