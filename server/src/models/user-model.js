const Sequelize = require("sequelize");
const sequelize = require("../../database/db");

module.exports = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING(80),
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        fields: ["email"],
      },
    ],
  },
);
