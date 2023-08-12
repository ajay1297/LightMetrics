'use strict'

const { DataTypes } = require("sequelize");
const sequelize = require('../dbInit');
const User = require('./user_model');

const Comment = sequelize.define("comment", {
    commentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    commentparentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Comment',
        key: 'commentid',
      },
      onDelete: 'CASCADE'
    }
}, {
    tableName: 'comment',
    timestamps: true
});

Comment.belongsTo(User, { foreignKey: 'userid', onDelete: 'CASCADE' });
Comment.belongsTo(Comment, { foreignKey: 'commentparentid', as:'parentid'});

module.exports = Comment;