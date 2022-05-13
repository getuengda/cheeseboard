const { Model } = require('sequelize/types');
const {Sequelize, sequelize} = require('./db.sqlite');

class Cheese extends Model{

}

let Cheese = sequelize.define('cheese', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});



module.exports = {
    Cheese
};