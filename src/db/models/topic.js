'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Topic.associate = function(models) {
    Topic.hasMany(models.Banner, {
      foreignKey: "topicID",
      as: "banners",
    });
  };

  Topic.associate = function(models) {
    Topic.hasMany(models.Rule, {
      foreignKey: "topicID",
      as: "rules",
    });
  };

  return Topic;
};
