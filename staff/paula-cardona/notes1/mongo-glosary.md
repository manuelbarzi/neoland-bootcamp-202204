# Apertura
## Notes

`Para connectar`
        
    .bin/mongod --dbpath data

`Para iniciar`
    
    npm init -y

`Instalar cliente`
        
    npm install mongodb

`Mostrar collections`
        
    show collections

`Actualizar usuario`
    
    db.users.update () //espera 2 objetos, el que se cambia y el que se actualiza


`Eliminar el usuario`

    db.users.remove ({_id : objectId ("432764873256")})

`Encontrar el usuario`

    db.users.find ({_id : objectId ("432764873256")})


`Añadir un usuario`

    db.users.insert ()

    db.users.insertOne { name: 'Peter Pan', username: 'peter', password: '123123123' }

    db.users.insertMany ([{document1},{document2},{ document3}])

`Para crear una nota`

    db.notes.insert ()
    
    db.notes.insertOne { { user: insertedId, text: 'hola mundo', date: new Date }
    
    db.notes.insertMany ([{document1},{document2},{ document3}])
 
 `Para eliminar una carpeta con su contenido`

    db.notes.drop()
 
 `Para eliminar un usuario`

    db.users.remove ()

