const { Sequelize, Association } = require("sequelize");
const { DataTypes, Model} = require('./db.sqlite');

const { Board } = require("./Board");
const { User } = require("./User");
const { Cheese } = require("./Cheese");

const db = new Sequelize('db', 'username', 'password',{
    dialect: 'sqlite',
    Storage: './db.sqqlite'
});

// Association

User.belongsTo(this.Board); // one User can have many Boards
Board.hasMany(User); // One User can have many Boards

Board.belongsToMany(Cheese, {through: "board_cheeses"}); // A cheese can be on multiple Boards i.e brie can be on both the French cheese and soft cheese boards 
Cheese.belongsToMany(Board, {through: 'board_cheeses'}); // A board can have multiple cheeses


module.exports = {
    User, 
    Board,
    Cheese
}