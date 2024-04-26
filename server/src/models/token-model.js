const Sequelize = require("sequelize");
const sequelize = require("../../database/db");

module.exports = sequelize.define(
  "Tokens",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: Sequelize.STRING(1024),
    },
    user_email: {
      type: Sequelize.STRING,
      unique: true,
      references: {
        model: "user",
        key: "email",
      },
    },
  },
  {
    tableName: "tokens",
    timestamps: false,
  },
);