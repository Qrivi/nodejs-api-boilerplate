'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Episodes',
      'show_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Shows',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    ).then(() => queryInterface.addColumn(
      'Shows',
      'station_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Stations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    ));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Episodes',
      'showId'
    ).then(() => queryInterface.removeColumn(
      'Shows',
      'stationId'
    ));
  }
};
