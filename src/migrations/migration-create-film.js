'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('film', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      cinemaId: {
        type: Sequelize.INTEGER
      },
      movieName: {
        type: Sequelize.STRING
      },
      discription: {
        type: Sequelize.TEXT
      },
      actor: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      dateStart: {
        type: Sequelize.DATE
      },
      dateEnd: {
        type: Sequelize.DATE
      },
      country: {
        type: Sequelize.STRING
      },
      filmStudio: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('film');
  }
};