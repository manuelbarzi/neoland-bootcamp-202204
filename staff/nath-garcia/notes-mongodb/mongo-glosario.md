# App con Mongodb

## Inicio
Desde la terminal (GIT BASH), nos metemos en el directorio donde tengamos **mongoDb** (dentro debemos tener la carpeta **_bin_** y creamos otra llamada **_data_**) e inicializamos la base de datos con:

    ./bin/mongod --dbpath data

Abrimos otra terminal (CMD en windows) y entramos en el directorio de **mongodb**. Con el siguiente comando se daría inicio al cliente y se conectaría al servidor.:

    .\bin\mongo

Para ver todas las bases de datos creadas:

    show dbs

Para posisicionarte dentro de la base de datos que quiero trabajar 

    use DATABASE

Para ver toas las colecciones que tienen dentro las bases de datos 

    show collections

Para poder ver todos los datos que tiene esa colección 

    db.users.find()

Para ver todos los documentos de manera ordenada como un array de objetos de la base de datos

    db.users.find().pretty()

Para insertar datos dentro de la colección 

    db.users.insert({ name: 'Peter Pan', username: 'peter', password: '123123123'})

Para poder editar uno o más datos de la colleción

    db.users.update({  "_id" : ObjectId("628b97fe9dd0c1df004778da") }, { username: 'juanpan' })





```javascript
console.log('Hola Mundo')
```