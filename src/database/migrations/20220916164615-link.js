'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('links',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        url: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        label: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        userId: {
          field: 'user_id',
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          }
        },
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('links');
  }
};