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



----

# App with Mongodb (info más detallada)

## How to install mongo

    npm i mongodb

## Show a database

    show dbs

## Create a database or use an existing one

    use database_name

## Start working on VSC

    const { MongoClient } = require('mongodb')

    MongoClient.connect('mongodb://localhost:27017')

    const db = connection.db(<dbName>)

    const collection = db.collection(<collectionName>)

## INSERT a document

### insertOne

    db.collectionName.insertOne(<document>)

##### Returns a document containing a boolean acknowledge as true if the operation ran with write concern or false and a field insertedId with the _id value.

### insertMany

    db.collectionName.insertMany(<array of documents>)

## FIND a document

### findOne

    db.collection.findOne(<filter>)

##### Returns the first document that matches the filter condition. If nothing is indicate as filter, it returns the las document registered. It is not possible to look for the id directly. It is neccessary to put `_id: ObjectId('idnumber')`

### find

    db.collection.find(<filter>)

##### Returns an array of documents.

## Query and Projection operators

    $eq

##### Find values equals to the query value

    $gt

##### Find values greater than the query value

    $gte

##### Find values equals or greaters than the query value

    $it

##### Find values less than the query value

    $ite

##### Find values less than the query value

    $ne

##### Find values that are not equals to the query value

## Update Documents

### updateOne

    db.collection.updateOne(<filter>, <update>, <options>)

##### The data to be update goes after the `$set` operator.
##### Within the third parameter `options` it is possible to add the `upsert` parameter. Behaves as insert if there is not document that matches the filter condition.

### updateMany

    db.collection.updateMany(<filter>, <update>)

## Delete Documents

### deleteOne

    db.collection.deleteOne(<filter>)

### deleteMany

    db.collection.deleteMany(<filter>)
