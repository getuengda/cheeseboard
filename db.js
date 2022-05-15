const path = require('path');
const { Sequelize } = require('sequelize');
const { Model, DataTypes, NUMBER } = require("sequelize");



const sequelize = new Sequelize( {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite') 
})

//Testing database connection



module.exports = { Sequelize, Model, sequelize, DataTypes }