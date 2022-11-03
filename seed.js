const expressAsyncHandler = require("express-async-handler");
const Flim = require("./src/models/flim.model");
const User = require("./src/models/user.model");

const seedDb = expressAsyncHandler(async (req, res) => {
    try {
        await User.sync({alter: true});
        console.log("User model build success");
        await Flim.sync({alter: false});
        console.log("Flim model build success");
        res.json("success")
    } catch (error) {
        console.log("fail build db", {error});
    }
})

module.exports = seedDb;