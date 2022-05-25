const { MongoClient } = require('mongodb')

console.log('test!')

MongoClient.connect('mongodb://127.0.0.1:27017', (error, connection) => {
    console.log('in')
    if (error) throw error

    const db = connection.db('notes-db') // use notes-db

    const users = db.collection('users') // db.users
    const notes = db.collection('notes') // db.notes

    



    //users.find({ name: 'John Doe'}).toArray((error, result) => { // db.users.find({ "name": "John Doe" })
    //    if (error) throw error
    //    console.log(result)
    //})

    //users.findOne({ name: 'John Doe'}, (error, result) => { // db.users.findOne({ "name": "John Doe" })
    //    if (error) throw error

    //    console.log(result)
    
    //})
})