// const { MongoClient } = require('mongodb')

// MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
//     if (error) return console.error(error)

//     const db = connection.db('notes-db')

//     const users = db.collection('users')
//     const notes = db.collection('notes')

//     users.deleteMany({}, (error) => {
//         if (error) return console.error(error)

//         users.insertMany([
//             { name: 'Peter Pan', username: 'peter', password: '123123123' },
//             { name: 'Charly Pan', username: 'charly', password: '123123123' },
//             { name: 'Charly Smith', username: 'charlysmith', password: '123123123' }
//         ],
//             (error, result) => {
//                 if (error) return console.error(error)

//                 console.log(result)
//                 const { insertedIds } = result

//                 let _error

//                 for (const key in insertedIds) {
//                     if (!_error) {
//                         notes.insertMany([
//                             { user: insertedIds[key].toString(), text: `soy la nota 1`, date: new Date },
//                             { user: insertedIds[key].toString(), text: `soy la nota 2`, date: new Date },
//                             { user: insertedIds[key].toString(), text: `soy la nota 3`, date: new Date }
//                         ],
//                             (error, result) => {
//                                 if (error) console.error(_error = error)

//                                 console.log(result)
//                             }
//                         )
//                     }
//                 }
//             }
//         )
//     })
// })



// const { MongoClient } = require('mongodb')

// MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
//     if (error) return console.error(error)

//     const db = connection.db('notes-db')

//     const users = db.collection('users')
//     const notes = db.collection('notes')

//     users.deleteMany({}, (error, result) => {
//         if (error) return console.error(error)

//         users.insertOne({ name: 'Peter Pan', username: 'peter', password: '123123123' }, (error, result) => {
//             if (error) return console.error(error)
    
//             console.log(result)

//             const { insertedId } = result

//             notes.insertOne({ user: insertedId, text: 'hola mundo', date: new Date }, (error, result) => {
//                 if (error) return console.error(error)

//                 console.log(result)
//             })
//         })
//     })
// })


const { MongoClient } = require('mongodb')


MongoClient.connect('mongodb://localhost:27017', (error, connection) => {

    if (error) throw error

    const db = connection.db('notes-db') // use notes-db

    const users = db.collection('users') // db.users
    const notes = db.collection('notes') // db.notes

    users.deleteMany({}, (error, result) => { // db.users.deleteMany({})

        if (error) throw error

        console.table(result)

        users.insertOne({
            name: 'John Doe',
            username: 'johndoe',
            password: '123123123'
        }, 
        // db.users.insertOne({...})
        (error, result) => {
            if (error) throw error
    
            console.log(result)
                
            users.find({ name: 'John Doe'}).toArray((error, result) => { // db.users.find({ "name": "John Doe" })
                if (error) throw error
                console.log(result)
            })    
        })
    

    })
})