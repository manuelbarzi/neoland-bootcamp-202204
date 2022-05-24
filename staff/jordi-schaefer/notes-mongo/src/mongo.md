# Notes

- En terminal git `./bin/mongod --dbpath data`

- En terminal CMD `bin\mongo`

--

## Comandos

-Leer documentos: `db.users.find().pretty()`

-Leer todo lo que contiene: `db.users.find('123')`

-Eliminar la coleccion: `db.users.drop()`

-Eliminar los documentos: `db.users.remove()`

-Eliminar documento que contiene: `db.users.remove({ name: 'pepito' })`

-Insertar documento: `db.users.insert({ name: 'pepito', username: 'pepi' })`

-Insertar documento: `db.notes.insertOne({ text: 'texto' })`

-Insertar documento referenciado a usuario: `db.notes.insert({ user: ObjectId("628b684e94e63d0549062786"), text: 'Hola notas', date: ISODate('2022-05-23') })`

-Editar un parametro: `db.users.updateOne({name: 'miguel'}, {$set: {username:'migui'}})`
        
    al que tiene nombre miguel, le modifico username por migui


npm i mongodb

