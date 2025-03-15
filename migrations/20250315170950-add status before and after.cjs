"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("histories", "statusBefore", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("histories", "statusAfter", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("histories", "statusBefore");
    await queryInterface.removeColumn("histories", "statusAfter");
  },
};
