const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bookingmovie', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
  });

const  connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

module.exports = {
    connectDB,
    sequelize
}