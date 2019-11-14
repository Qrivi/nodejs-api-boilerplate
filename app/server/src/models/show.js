'use strict';

module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fetchInterval: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fetchedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });

  Show.associate = function(models) {
    Show.belongsTo(models.Station);
  };

  return Show;
};
