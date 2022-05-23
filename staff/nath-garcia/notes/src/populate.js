const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
    if ( error) return console.error(error)

    const db = connection.db('notes-db')

    const users = db.collection('users')
    const notes = db.collection('notes')

    users.deleteMany({}, (error, result) => {
        if (error) return console.error(error)

        users.insertOne({ name: 'Peter Pan', username: 'peter', password:'123123123'} , (error, result) => {
            if (error) return console.error(error)

            console.log(result)

            const { insertedId } = result

            notes.insertOne({ user: insertedId, text: 'hola mundo', date: new Date }, (error, result) => {
                if (error) return console.error(error)

                console.log(result)
            })
        })
    })
})