const { Model } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db.sqlite');

class User extends Model{

}

let User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});



module.exports = {
    User
};