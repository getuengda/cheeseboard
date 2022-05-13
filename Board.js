const {Sequelize, sequelize} = require('./db.sqlite');

let Board = sequelize.define('board', {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.Number
   
});



module.exports = {
    Board
};