const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
    if (error) return console.error(error)

    const db = connection.db('notes-db')

    const users = db.collection('users') // coleciones 
    const notes = db.collection('notes')

    users.deleteMany({}, (error, result) => {
        if (error) return console.error(error)

        users.insertOne({ name: 'Peter', username: 'peter', password: '123123123' }, (error, result) => {
            if (error) return console.error(error)
            console.log('Create User')
            console.log(result)

            const { insertedId } = result

            users.insertMany([{ name: 'wen', username: 'wen', password: '123123123' }, { name: 'Pan', username: 'pen', password: '123123123' },{ name: 'weny', username: 'wen', password: '123123123' }], (error, result) => {
                if (error) return console.error(error)
                console.log('Create 2 User')
                console.log(result)

                notes.insertOne({ user: insertedId, text: 'nota 1', date: new Date }, (error, result) => {
                    if (error) return console.error(error)
                    console.log('Add una note')
                    console.log(result)

                })

                notes.insertMany([{ user: insertedId, text: 'nota 2', date: new Date }, { user: insertedId, text: 'nota 3', date: new Date }], (error, result) => {
                    if (error) return console.error(error)
                    console.log('add 2 notes')
                    console.log(result)

                })

                users.updateOne({ _id: insertedId }, { $set: {name:"newName" } }, (error, result) => {
                    if (error) return console.error(error)

                    console.log('Update name the user')
                    console.log(result)

                })

                notes.updateOne({ text:"nota 3" }, { $set: { text:"newNote" } }, (error, result) => {
                    if (error) return console.error(error)

                    console.log('Update user')
                    console.log(result)

                })
                notes.deleteOne({ text: "nota 2" }, (error, result) => {

                    if (error) return console.error(error)

                    console.log('Delete note text nota 2')
                    console.log(result)

                })

                users.deleteOne({ name: "wen" }, (error, result) => {

                    if (error) return console.error(error)

                    console.log('Delete user wen')
                    console.log(result)

                })


            })
        })
    })
})