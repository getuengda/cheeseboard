const {Sequelize, DataTypes, sequelize, Model} = require('./db');


const Cheese = sequelize.define('cheese', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});



module.exports = { Cheese };