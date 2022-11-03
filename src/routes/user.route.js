const { Router } = require("express");
const { ROLE } = require("../constanis");
const {
  register,
  login,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

const authorize = require("../middlewares/auth.middleware");

const route = Router();

route.post("/register", register);
route.post("/login", login);
route.delete("/delete/:id", authorize([ROLE.ADMIN]), deleteUser);

route.get("/getAllUser", authorize([ROLE.ADMIN]), getAllUser);
route.post("/update", authorize([ROLE.ADMIN, ROLE.USER]), updateUser);

module.exports = route;
