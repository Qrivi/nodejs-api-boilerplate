'use strict';

module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define('Episode', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Episode.associate = function (models) {
    Episode.belongsTo(models.Show);
  };

  return Episode;
};
