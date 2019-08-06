"use strict";
module.exports = (sequelize, DataTypes) => {
  const bananasmoothie = sequelize.define(
    "bananasmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  bananasmoothie.associate = function(models) {
  };
  return bananasmoothie;
};
