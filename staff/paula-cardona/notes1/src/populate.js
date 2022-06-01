const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, connection) => { //./bin/mongo 
    if (error) return console.error(error)

    const db = connection.db('notes-db') // use notes-db. collection es un objeto que tiene todas las utilidades que tiene la consola, es un metodo db dentro del nombre de la base de datos 

    const users = db.collection('users') //db.users
    const notes = db.collection('notes') //db.notes

    users.deleteMany({}, (error, result) => { //db.users.deleteMany({})
        if (error) return console.error(error)

        users.insertMany([
            { name: 'Tamara Gorro', username: 'tamara', password: '123123123' },
            { name: 'Paula Cardona', username: 'paula', password: '123123123' },
            { name: 'Miguel Diaz', username: 'miguel', password: '123123123' }], (error, result) => {

            if (error) return console.error(error)
    
            console.log(result)

            const { insertedId } = result

            
            notes.insertMany
            ({ user: insertedId, text: 'hola mundo', date: new Date }, (error, result) => {
                if (error) return console.error(error)

                console.log(result)
            })
        })
    })
})

// const { MongoClient } = require('mongodb')


// MongoClient.connect('mongodb://localhost:27017', (error, connection) => {

//     if (error) throw error

//     const db = connection.db('notes-db') // use notes-db

//     const users = db.collection('users') // db.users
//     const notes = db.collection('notes') // db.notes

//     users.deleteMany({}, (error, result) => { // db.users.deleteMany({})

//         if (error) throw error

//         console.table(result)

//         users.insertOne({
//             name: 'John Doe',
//             username: 'johndoe',
//             password: '123123123'
//         }, 
//         // db.users.insertOne({...})
//         (error, result) => {
//             if (error) throw error
    
//             console.log(result)
                
//             users.find({ name: 'John Doe'}).toArray((error, result) => { // db.users.find({ "name": "John Doe" })
//                 if (error) throw error
//                 console.log(result)

//                 users.removeOne({ name: 'John Doe'}), (error, result) => { // db.users.remove({ "name": "John Doe" })
//                     if (error) throw error
//                     console.log(result)

//                     users.updateOne({"name" : "John Doe"},{$set : {"name": "John Cena"}} ), (error, result) => { // db.users.remove({ "name": "John Doe" })
//                         if (error) throw error
//                         console.log(result)
//                     } 
//                 }  
//             })    
//         }) 
    


//     })
// })


// db.bios.remove( { } )
