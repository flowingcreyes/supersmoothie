"use strict";
module.exports = (sequelize, DataTypes) => {
  const strawberrySmoothie = sequelize.define(
    "strawberrySmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  strawberrySmoothie.associate = function(models) {
    //    associations can be defined here
  };
  return strawberrySmoothie;
};
