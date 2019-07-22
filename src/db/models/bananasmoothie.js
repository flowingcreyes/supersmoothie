"use strict";
module.exports = (sequelize, DataTypes) => {
  const bananasmoothie = sequelize.define(
    "bananasmoothie",
    {
      name: DataTypes.STRING,
      recipe: DataTypes.STRING,
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
