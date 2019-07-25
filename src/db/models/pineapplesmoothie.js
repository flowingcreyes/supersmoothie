'use strict';
module.exports = (sequelize, DataTypes) => {
  const pineapplesmoothie = sequelize.define('pineapplesmoothie', {
    name: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    recipe: DataTypes.TEXT,
    calories: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  pineapplesmoothie.associate = function(models) {
    // associations can be defined here
  };
  return pineapplesmoothie;
};