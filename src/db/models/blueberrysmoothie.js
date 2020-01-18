"use strict";
module.exports = (sequelize, DataTypes) => {
  const blueberrySmoothie = sequelize.define(
    "blueberrySmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  blueberrySmoothie.associate = function(models) {
    //  associations can be defined here
  };
  return blueberrySmoothie;
};
