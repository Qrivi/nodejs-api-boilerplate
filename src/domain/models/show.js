'use strict';

export default (sequelize, DataTypes) => {
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
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Show.associate = function (models) {
    Show.belongsTo(models.Station);
  };

  return Show;
};
