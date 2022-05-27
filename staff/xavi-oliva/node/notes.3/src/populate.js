const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
    // if (error) throw error    
    if (error) return console.error(error)

    const db = connection.db('notes-db') // igual que: use notes-db (en terminal)

    const users = db.collection('users') // db.users (en terminal)
    const notes = db.collection('notes') // db.notes

    users.deleteMany({}, (error, result) => { // db.users.deleteMany({})
        if (error) return console.error(error)

        users.insertOne({ 
            name: 'Peter Pan', 
            username: 'peter', 
            password: '123123123' 
        },
        // db.users.insertOne({...})
        (error, result) => {
            if (error) return console.error(error)

            console.log(result)

            const { insertId } = result

            notes.insertOne({ user: insertId, text: 'hola mundo', date: new Date }, (error, result) => {
                if (error) return console.error(error)

                console.log(result)
            })
        })
    })
})