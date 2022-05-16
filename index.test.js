// import {jest} from '@jest/globals';
const { Sequelize, Association } = require("sequelize");
// const { Cheese } = require("./Cheese");
const { sequelize, Model, DataTypes, Number } = require('./db');
const { User, Board, Cheese } = require('./index')
const { index } = require('./index')



describe('Board Model', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true}); //{force: true} {alter: true}
        console.log("All models are syncronized succesfully!")
    })

    test('Board create boards', async () => {
        const newBoard = await Board.create(
        {
            type: 'Wooden',
        description: 'Flat'},
        {
            type: 'Glossy',
            description: 'Circular'
        }
            )
        expect(newBoard.type).toBe('Wooden', 'Glossy');
    })
    test('Board "type" has STRING value', async () => {
        const board = await Board.create({type: 'type', description:'description', rating:13} )
        expect(typeof board.type).toBe('string');
        expect(typeof board.description).toBe('string');
    })
    test('Type of Board is an Object', async () => {
        const board = await Board.create({type: 'type', description:'description', rating:13} )
        expect(typeof board).toBe('object');
    })

    // Board creats boards
    test('Board create boards', async () => {
        const newBoard = await Board.create(
        {
            type: 'Wooden',
        description: 'Flat'},
        {
            type: 'Glossy',
            description: 'Circular'
        }
            )
        expect(newBoard.type).toBe('Wooden', 'Glossy');
    })

    test('Board "type" has STRING value', async () => {
        const board = await Board.create({type: 'type', description:'description', rating:13} )
        expect(typeof board.type).toBe('string');
        expect(typeof board.description).toBe('string');
    })

    test('Type of Board is an Object', async () => {
        const board = await Board.create({type: 'type', description:'description', rating:13} )
        expect(typeof board).toBe('object');
    })

    test('Board "rating" has NUMBER value', async () => {
        const board = await Board.create({type: 'type', description:'description', rating:13} )
        // expect(typeof board.rating).toBe('Number');
    })

     // Find all boards
     test('Find all boards', async () => {
        const boards = await Board.findAll();
        console.log(boards.every(board => board instanceof Board)); // true
        console.log("All boards:", JSON.stringify(boards, null, 3));
      })
        
})
 // Cheese Model
    describe('Cheese Model',()=> {
        // Cheese Creates attributes or fields
      test('Cheese create cheeses and get by title and check lenght', async () => {
        const newCheese = await Cheese.create(
        {
            title: 'Brie',
        description: 'Healthy'},
        {
            title: 'Maasdam',
            description: 'Cool'
        },{
            title: 'Feta',
            description: 'wawoo'
        },{
            title: 'Cheddar',
            description: 'Where can I find?'
        })

        expect(newCheese.title).toBe('Brie', 'Maasdam', 'Feta', 'Cheddar');
        })

        // Cheese has list of title Itmes
        test('Type of Cheese is an object Model', async () => {
            const cheese = await Cheese.create({title: 'type', description:'description'} )
            expect(typeof cheese).toBe('object');
        })
        
       // Cheese has field: type with String typeof
        test('Cheese "title" has STRING value', async () => {
            const cheese = await Cheese.create({title: 'Fettaa', description:'description'} )
            expect(typeof cheese.title).toBe('string');
        })
        // Cheese has field: description with String typeof 
        test('Cheese "description" has STRING value', async () => {
            const cheese = await Cheese.create({title: 'Gouda', description:'Honey'} )
            expect(typeof cheese.description).toBe('string');
        })

        // Find all Cheeses
        test('Find all cheeses', async () => {
        const cheeses = await Cheese.findAll();
        console.log(cheeses.every(cheese => cheese instanceof Cheese)); // true
        console.log("All cheeses:", JSON.stringify(cheeses, null, 4));
        })
    })

    // User Model
describe('User Model',()=> {
    // Users can creat new users
    test('User create users and querry by name and/or email', async () => {
        const newUser = await User.create(
        {
            name: 'Kon',
            email: 'kon@gmail.com'
        }
        // {
        //     name: 'Madi',
        //     email: 'madi@yahoo.com'
        // },{
        //     name: 'Lin',
        //     email: 'lin@gmail.com'
        // },{
        //     name: 'Mark',
        //     email: 'mark@hotmail.com'}
        );
        expect(newUser.name).toBe('Kon');
        expect(newUser.email).toBe('kon@gmail.com');
    })

        //User has a field "name" with  STRING datatype
    test('Cheese "title" has STRING value', async () => {
            const users = await User.create({name: 'Suo', email:'suo@gmail.com'} )
            expect(typeof users.name).toBe('string');
    })

        // User has field "email" with String datatype 
    test('User "email" has STRING datatype', async () => {
            const users = await User.create({name: 'Wou', email:'wou@gmail.com'} )
            expect(typeof users.email).toBe('string');
    })   

    // Find all Users
    test('Find all User', async () => {
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All Users:", JSON.stringify(users, null, 5));
    })

})

// Association Users < ... > Board
// Associate to check the User and Board models with a One-to-Many relationship
describe('User Model',()=> {
//        // Bands can have all musicians
    test('User can have morethan one board', async () => {
        const Moni = await User.create({
            name: 'Moni',
            email: 'moni@gmail.com'
        });
       
        const Wooden1 = await Board.create({
            type: 'Wooden',
            description: 'Flat'
        });
        const Glosse1 = await Board.create({
            type: 'Glosse',
            description: 'Circular'
        });
        const Shiny1 = await Board.create({
            type: 'Shiny',
            description: 'Square'
        });
          // await musician.save();
          // console.log(musicians.name)
  
        await Moni.addBoard(Wooden1);
        await Moni.addBoard(Glosse1);
        await Moni.addBoard(Shiny1);
  
        const boards = await Moni.getBoards();
        expect(boards.length).toBe(3);
        expect(boards[0] instanceof Board).toBeTruthy;
        await console.log(Moni.getBoards())    

    }) 
})
 // Boards < - > Cheeses
    // Associate the Board and Cheese models with a Many-to-Many relationship.     
    //  const cheeses = Board.hasMany(Cheese, {through: "cheeses"});
    describe('Associate the Board and Cheese models',()=> {
        // Associate the Board and Cheese models with a Many-to-Many relationship. 
            test('Associate the Board and Cheese models', async () => {
                const CHE1 = await Cheese.create(
                    { title: 'Brie_Special', description: 'Italiano' }
                );
                const CHE2 = await Cheese.create(
                    { title: 'Gouda_Special', description: 'Frenchis' }
                );

                const BOR1 = await Cheese.create(
                    { type: 'Wood_Case', description: 'Square and thick' }
                );
                const BOR2 = await Cheese.create(
                    { type: 'Glossy_Case', description: 'Circular and thin' }
                );
                
                // Board.belongsToMany(Cheese, { through: 'BoardCheese' });
                // Cheese.belongsToMany(Board, { through: 'BoardCheese' });

                await CHE1.addBoard(BOR1);
                await CHE1.addBoard(BOR2);
                await CHE2.addBoard(BOR1);
                await CHE2.addBoard(BOR2);
                
            const cheeses1 = await CHE1.getBoards();
            const cheeses2 = await CHE2.getBoards();

            expect(cheeses1.length).toBe(2);
            expect(cheeses1[0] instanceof Cheese).toBeTruthy;
                       

            })
    })

    
        