//import our database, DataTypes, Model
const { Sequelize, Association } = require("sequelize");
const { DataTypes, sequelize, Model} = require('./db');

//Import all models
const { User } = require("./User");
const { Board } = require("./Board");
const { Cheese } = require("./Cheese");


                        // Association
//Users < - > Boards
        // Associate the User and Board models with a One-to-Many relationship
        Board.belongsTo(User); // one User can have many Boards
        // Multiple Boards can be added to a User.
        User.hasMany(Board); // One User can have many Boards

// Boards < - > Cheeses
        // Associate the Board and Cheese models with a Many-to-Many relationship.
            //Board.belongsToMany(Cheese, {through: "cheeses"});
        // // A Board can have many Cheeses
            // Board.hasMany(Cheese); 
        // // A Cheese can be on many Boards
        //     Cheese.hasMany(Board);

//Eager Loading
        // Write another test(s) that verify one or more of these:

        // A board can be loaded with its cheeses
        // A user can be loaded with its boards
        // A cheese can be loaded with its board data
        
        
// Board.belongsToMany(Cheese, {through: "board_cheeses"}); // A cheese can be on multiple Boards i.e brie can be on both the French cheese and soft cheese boards 
// Cheese.belongsToMany(Board, {through: 'board_cheeses'}); // A board can have multiple cheeses

// export the models with this associations

module.exports = {
    User, 
    Board,
    Cheese
}