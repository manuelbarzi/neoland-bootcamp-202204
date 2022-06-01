const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (error, connection) => {
    if (error) return console.error(error)

    const db = connection.db('notes-db')

    const users = db.collection('users')
    const notes = db.collection('notes')

    users.deleteMany({}, (error, result) => {
        if (error) throw error //console.error(error)

        users.insertMany([{ name: 'Peter Pan', username: 'peter', password: 'miguel123' },
                        {name: 'Miguel Angel', username: 'miguel', password: 'miguel123'},
                        {name: 'Jordi Cruz', username: 'jordicruz', password: 'miguel123'},
                        {name: 'Fe De', username: 'fede', password: 'miguel123'}], (error, result) => {
            if (error) return console.error(error)
    
            console.log(result)

            const { insertedId } = result

            notes.insertMany([{ user: insertedId, text: 'hola mundo', date: new Date },
                            {user: insertedId, text: 'I hate You', date: new Date},
                            {user: insertedId, text: 'Soy un facha', date: new Date},
                            {user: insertedId, text: 'QUE ONDA BOLUDO', date: new Date}], (error, result) => {
                if (error) return console.error(error)

                console.log(result)
                        
            })
        })

    })
})