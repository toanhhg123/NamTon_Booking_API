const express = require("express");
const evn = require("dotenv");
const { connectDB } = require("./connect/sequelize");
const cors = require("cors");
const { seedDb, seedAdmin } = require("../seed");
evn.config();

const userRoute = require("./routes/user.route");
const cinemaRoute = require("./routes/cinema.route");
const filmRoute = require("./routes/film.route");
const roomRoute = require("./routes/room.route");
const clusterRoute = require("./routes/cluster.route");
const bannerRoute = require("./routes/banner.route");
const booksRoute = require("./routes/book.route");
const playTimeRoute = require("./routes/playTime.route");
const { createassociation } = require("./models");

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
app.use("/cinema", cinemaRoute);
app.use("/film", filmRoute);
app.use("/room", roomRoute);
app.use("/cluster", clusterRoute);
app.use("/banner", bannerRoute);
app.use("/book", booksRoute);
app.use("/playtime", playTimeRoute);

app.get("/seed", seedDb);
app.post("/seedAdmin", seedAdmin);
connectDB();
createassociation();
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("app listen on port " + port);
});
