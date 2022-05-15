const {Sequelize, DataTypes, sequelize, Model} = require('./db');


const Board = sequelize.define('board', {
    // Model attributes are defined here
    type: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING,
      // allowNull defaults to true  rating
    }
    // rating: {
    //   rating: Sequelize.DataTypes.INTEGER, 
    // }
  });
  
module.exports = { Board };