'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Episodes',
      'showId',
      {
        type: Sequelize.INTEGER,
        field: 'show_id',
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
      'stationId',
      {
        type: Sequelize.INTEGER,
        field: 'station_id',
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
