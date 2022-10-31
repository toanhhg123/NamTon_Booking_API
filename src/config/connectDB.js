const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('bookingmovie',"root",null,{
  host:'localhost',
  dialect:'mysql',
  logging:false,
})
let connectDB=async()=>{
  try{
    await sequelize.authenticate();
    console.log("kết nối database thành công !")
  }catch(error){
     console.error("kết nối database thất bại !",  error)
  }
}
module.exports = connectDB;