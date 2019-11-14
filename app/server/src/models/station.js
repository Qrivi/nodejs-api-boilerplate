'use strict';

module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('Station', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Station;
};
