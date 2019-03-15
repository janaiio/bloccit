'use strict';

module.exports = (sequelize, DataTypes) => {
  var AdAssociation = sequelize.define('AdAssociation', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    adId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Advertisements",
        key: "id",
        as: "adId",
      }
    }
  }, {});

  AdAssociation.associate = function(models) {
    AdAssociation.belongsTo(models.Advertisement, {
      foreignKey: "adId",
      onDelete: "CASCADE",
    });
  };

  return AdAssociation;


};
