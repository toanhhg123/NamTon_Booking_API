const express = require('express')
const evn = require('dotenv');
const { connectDB } = require('./connect/sequelize');
const seedDb = require('../seed');

const app = express();

evn.config()
app.get('/' , (req,res) => {
    return res.json("oke")
})

app.post('/seed', seedDb)

connectDB();
const port = process.env.PORT || 8081;

app.listen(port , () => {
    console.log("app listen on port " + port)
})