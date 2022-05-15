const {Sequelize, DataTypes, sequelize, Model} = require('./db');


let User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});



module.exports = { User };