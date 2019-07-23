"use strict";
module.exports = (sequelize, DataTypes) => {
  const bananasmoothie = sequelize.define(
    "bananasmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.STRING(400),
      recipe: DataTypes.STRING(600),
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  bananasmoothie.associate = function(models) {
    // associations can be defined here
  };
  return bananasmoothie;
};
