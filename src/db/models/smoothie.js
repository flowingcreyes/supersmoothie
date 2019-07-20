'use strict';
module.exports = (sequelize, DataTypes) => {
  const Smoothie = sequelize.define('Smoothie', {
    name: DataTypes.STRING,
    recipe: DataTypes.STRING,
    calories: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Smoothie.associate = function(models) {
    // associations can be defined here
    Smoothie.
  };
  return Smoothie;
};
