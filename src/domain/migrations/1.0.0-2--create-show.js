'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shows', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      hash: {
        type: Sequelize.STRING(36),
        allowNull: false
      },
      fetchInterval: {
        type: Sequelize.INTEGER,
        field: 'fetch_interval',
        allowNull: false,
        defaultValue: 60 * 60 * 24
      },
      fetchedAt: {
        type: Sequelize.DATE,
        field: 'fetched_at',
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shows');
  }
};
