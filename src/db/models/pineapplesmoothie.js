"use strict";
module.exports = (sequelize, DataTypes) => {
  const pineappleSmoothie = sequelize.define(
    "pineappleSmoothie",
    {
      name: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      recipe: DataTypes.TEXT,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  pineappleSmoothie.associate = function(models) {
    //  associations can be defined here
  };
  return pineappleSmoothie;
};
