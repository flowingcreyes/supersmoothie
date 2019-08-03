"use strict";
module.exports = (sequelize, DataTypes) => {
  const blueberrysmoothie = sequelize.define(
    "blueberrysmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  blueberrysmoothie.associate = function(models) {
    //  associations can be defined here
  };
  return blueberrysmoothie;
};
