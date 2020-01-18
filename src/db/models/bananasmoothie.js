"use strict";
module.exports = (sequelize, DataTypes) => {
  const bananaSmoothie = sequelize.define(
    "bananaSmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  bananaSmoothie.associate = function(models) {
  };
  return bananaSmoothie;
};
