
const { MongoClient } = require('mongodb') // traemos el MongoClient del mongodb que nos hemos instalado

// el cliente (apis, buscadores) tienen que estar conectados al servidor
// ejecutamos la funcion y en la respuesta ejecutamos nuestro codigo

// clousure (es un "portal") solo puedes conectarte a traves de su sistema de seguridad

MongoClient.connect('mongodb://127.0.0.1:27017', (error, connection) => {  // espero el error y la conexion
    if (error) return console.error(error)

    const db = connection.db('notes-db') // me conecto con una base de datos donde pongo cosas, si notes-db no existe lo creo 
    // equivale use notes-db, una de las muchas bases que podria usar

    const users = db.collection('users') // recojo una coleccion / equivale al db.users
    const notes = db.collection('notes')

    users.deleteMany({}, (error, result) => { // borra el contenido pero no la carpeta
        if (error) return console.error(error)

        console.log("\u001b[1;42m All users deleted " + "\u001b[0m")
        console.log(result)

        notes.deleteMany({}, (error, result) => { // borra el contenido pero no la carpeta
            if (error) return console.error(error)
    
            console.log("\u001b[1;42m All notes deleted " + "\u001b[0m")
            console.log(result)

            users.insertOne({ name: 'Peter Pan', username: 'peter', password: '123123123' },(error, result) => {
                if (error) return console.error(error)
        
                console.log("\u001b[1;42m User Peter created " + "\u001b[0m")
                console.log(result)

                const { insertedId } = result

                notes.insertOne({ user: insertedId, text: 'hola mundo', date: new Date }, (error, result) => {
                    if (error) return console.error(error)

                    console.log("\u001b[1;42m Note created " + "\u001b[0m")
                    console.log(result)
                    //console.table(result)

                    const { insertedId } = result

                    notes.updateOne({ _id: insertedId}, {$set: { text: 'texto cambiado'}}, (error, result) => {
                        if (error) return console.error(error)

                        console.log("\u001b[1;42m Note-text changed " + "\u001b[0m")
                        console.log(result)

                        users.insertMany([{ name: 'pepito', username: 'pepi', password: '12121212' },
                        { name: 'juan', username: 'juanito', password: '454545' },
                        { name: 'wendy', username: 'wendy_22', password: '4' }],(error, result) => {
                            if (error) return console.error(error)
                    
                            console.log("\u001b[1;42m Three more users created " + "\u001b[0m")
                            console.log(result)

                            notes.deleteMany({}, (error, result) => {
                                if (error) return console.error(error)

                                console.log("\u001b[1;42m All notes deleted " + "\u001b[0m")
                                console.log(result)
                            })

                            users.deleteOne({ username: 'peter' }, (error, result) => {
                                if (error) return console.error(error)

                                console.log("\u001b[1;42m Username peter deleted " + "\u001b[0m")
                                console.log(result)
                            })
                            
                            users.deleteMany({ password: /.*4.*/ }, (error, result) => { // elimina los que contienen un 4
                                if (error) return console.error(error)

                                console.log("\u001b[1;42m Delete users with 4 in the password " + "\u001b[0m")
                                console.log(result)
                            })

                            users.deleteMany({ password: { $in: ['12121212'] }}, (error, result) => { // elimina los que tienen esa contraseña especifica
                                if (error) return console.error(error)

                                console.log("\u001b[1;42m Delete username with specific password '12121212' " + "\u001b[0m")
                                console.log(result)
                            })                                                      
                        })
                    })
                })
            })
        })
    })
})

// { password: { $in: [/.*4.*/, /.*5.*/] }}    Elimina todos los que contiene un 4 o 5
