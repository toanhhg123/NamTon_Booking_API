const express = require("express");
const evn = require("dotenv");
const { connectDB } = require("./connect/sequelize");
const cors = require("cors");
const { seedDb, seedAdmin } = require("../seed");
evn.config();

const userRoute = require("./routes/user.route");
const JwtService = require("./services/jwt.service");

const app = express();

console.log(process.env.PRIVATE_KEY_JWT);

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  return res.json("oke");
});
app.use("/auth", userRoute);
app.post("/seed", seedDb);
app.post("/seedAdmin", seedAdmin);
connectDB();
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("app listen on port " + port);
});
