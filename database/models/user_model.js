'use strict'

const { DataTypes } = require("sequelize");
const sequelize = require('../dbInit');

const User = sequelize.define("user", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    }
}, {
    tableName: 'user',
    timestamps: true
});

module.exports = User;