'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discount', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      filmId: {
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      dateStart: {
        type: Sequelize.DATE
      },
      dateEnd: {
        type: Sequelize.DATE
      },
      image: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('discount');
  }
};