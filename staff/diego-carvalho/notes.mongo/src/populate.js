const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017', (error, connection) => {

    if (error) return console.error(error)
    // declaro una variable (db) para conectar (si ya existe) o crear (si no existe) una base de datos en la notes  de src.
    const db = connection.db('notes-db')

    const users = db.collection('users')//declaro una variable....
    const notes = db.collection('notes')

    users.deleteMany({}, (error, result) => {//uso el método deleteMany para deletar todo que hay en users
        if (error) return console.error(error)
        //uso el métod insertOne para crear un nuevo documento(usuário) en users.
        users.insertOne({ name: 'Peter pan', username: 'peter', password: '123123123' }, (error, result) => {
            if (error) return console.error(error)

            console.log(result)

            const { insertedId } = result

            notes.insertOne({ user: insertedId, text: 'hola mundo', date: new Date }, (error, result) => {
                if (error) return console.error(error)

                console.log(result)
            })
        })

        users.insertOne({ name: 'Wendy Pan', username: 'wendypan', password: '1234' }, (error, result) => {
            if (error) return console.error(error)

            console.log(result)

            const { insertedId } = result

            notes.insertOne({ user: insertedId, text: 'hello world', date: new Date }, (error, result) => {
                if (error) return console.error(error)

                console.log(result)
            })
        })

        users.find({ name: 'John Doe' }).toArray((error, result) => { // db.users.find({ "name": "John Doe" })
            if (error) throw error
            console.log(result)
        })
    })
})
