'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      cinemaId: {
        type: Sequelize.INTEGER
      },
      seatId: {
        type: Sequelize.INTEGER
      },
      premiereId: {
        type: Sequelize.INTEGER
      },
      roomName: {
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
    await queryInterface.dropTable('room');
  }
};