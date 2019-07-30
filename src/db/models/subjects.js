"use strict";
module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define(
    "Subjects",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Subjects.associate = function(models) {
    // associations can be defined here
  };
  return Subjects;
};
