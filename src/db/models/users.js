"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Subjects, {
      foreignKey: "userId",
      as: "subjects"
    });
  };
  return Users;
};
