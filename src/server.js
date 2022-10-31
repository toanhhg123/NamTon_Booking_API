import express from "express";
import bodyParser from "body-parser";
import { corsOptions } from "./config/cors";
import cors from 'cors'
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./routers/index"
import connectDB from "./config/connectDB"
require('dotenv').config()
let app = express();
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
viewEngine(app);
initWebRoutes(app);
connectDB()
let port = process.env.PORT;
app.listen(port,()=>{
  console.log("Kết nối thành công port:"+port)
})