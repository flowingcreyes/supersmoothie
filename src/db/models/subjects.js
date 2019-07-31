"use strict";
module.exports = (sequelize, DataTypes) => {
  const Subjects = sequelize.define(
    "Subjects",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Subjects.associate = function(models) {
    // associations can be defined here
    Subjects.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    })
  };
  return Subjects;
};
