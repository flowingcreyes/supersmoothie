"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { msg: "must be a valid email" }
        }
      },
      password: { type: DataTypes.STRING, allowNull: false },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "member"
      }
    },
    {}
  );
  Users.associate = function(models) {
    //  associations can be defined here
    Users.hasMany(models.Subjects, {
      foreignKey: "userId",
      as: "subjects"
    });
  };
  Users.prototype.isAdmin = function() {
    return this.role === "admin";
  };
  return Users;
};
