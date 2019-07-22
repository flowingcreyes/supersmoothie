"use strict";
module.exports = (sequelize, DataTypes) => {
  const strawberrysmoothie = sequelize.define(
    "strawberrysmoothie",
    {
      name: DataTypes.STRING,
      recipe: DataTypes.STRING,
      calories: DataTypes.STRING,
      source: DataTypes.STRING
    },
    {}
  );
  strawberrysmoothie.associate = function(models) {
    // associations can be defined here
  };
  return strawberrysmoothie;
};
