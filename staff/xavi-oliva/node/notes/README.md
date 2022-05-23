# App con Mongodb

## Apertura
En la terminal (GIT BASH), nos metemos en el directorio donde tengamos **mongoDb** (dentro debemos tener la carpeta **_bin_** y creamos otra llamada **_data_**) e inicializamos la base de datos con:

    ./bin/mongod --dbpath data

Abrimos otra terminal (CMD en windows) y entramos en el directorio de **mongodb**. Con el siguiente comando inicializamos el cliente en mongo **(ojo!! barra invertida en _cmd_... porque sí)**:

    .\bin\mongo

Para ver las bases de datos creadas:

    show dbs

Entraremos a la de **notes** con:
    
    use notes-db

Para mostrar qué tenemos dentro de **notes-db**:

    show collections

## Users

Crear usuario:

    db.users.insertOne({name: 'John Doe', username: 'johndoe', password: '123123123'})

Crear varios a la vez:

    db.users.instertMany([{ name: 'Peter Pan', username: 'peter', password: '123123123' }, { name: 'Charly Pan', username: 'charly', password: '123123123' }, { name: 'Charly Smith', username: 'charlysmith', password: '123123123' }]

Actualizar algun dato de usuario:

    db.users.update({"user":"oldname"}, {$set:{"user":"newname"}})

    db.users.update({_id: ObjectId_}, {$set:{"age":"22"}})

Eliminar usuario:

    db.users.remove({_id: ObjectId("...")})

Eliminar todos:

    db.users.remove({})

Eliminar Collection:

    db.users.drop({})

Buscar usuario:

    db.users.find({ "name": "John Doe" })

## Notes


