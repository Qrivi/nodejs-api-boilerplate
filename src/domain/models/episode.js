'use strict';

export default (sequelize, DataTypes) => {
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
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Episode.associate = function (models) {
    Episode.belongsTo(models.Show);
  };

  return Episode;
};
