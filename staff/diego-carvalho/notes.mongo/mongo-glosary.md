# Database Commands

## Some commands documentation outlined below describes a command and its available parameters and provides a document template or prototype for each command.

*MongoDb provides the following method for inserting documents into a colletion:*

        show databases

- `show databases`: sirve para ver todas las bases de datos

      use notes

- `use notes-db` - sirve para posicionarse dentro de la base de datos de la colección (notes-db).

- `db.users.insert()` - sirve para inserir un documento en la colección.

*Ejemplo: db.users.insert({ name: 'Peter Pan', username: 'peterpan', password: '123123123'})*

- `db.users.find().pretty()` - sirve para ensinar todos los documentos dentro de la colección en un formato atractivo y fácil de leer.

*Ejemplo:* 

*{	"_id" : ObjectId("628b672a29d1e9c48457597d"),
	"name" : "Peter Pan",
	"username" : "peterpan",
	"password" : "123123123"
}*

*{
	"_id" : ObjectId("628b679029d1e9c48457597e"),
	"name" : "Wendy Pan",
	"username" : "wendypan",
	"password" : "123123123"
}...*

- `db.users.find()` - sirve para seleccionar documentos en una colección y devolver un cursor a los documentos seleccionados. 

*Ejemplo:*

 *db.users.find()* 

*{ "_id" : ObjectId("628b679029d1e9c48457597e"), "name" : "Wendy Pan", "username" : "wendypan", "password" : "123123123" }*

*{ "_id" : ObjectId("628b67c629d1e9c48457597f"), "name" : "Juan Pan", "username" : "johnpan", "password" : "123123123" }*


- `db.users.update()` - sirve para actualizar o reemplazar un solo documento que coincide con un filtro específico (Id) o actualiza todos los documentos que coinciden con un el mismo id.

*Ejemplo:*

*db.users.find({"_id": ObjectId("628b672a29d1e9c48457597d")},{$set: {name: 'Joana Pan', password:'123123123'}})* 

`//irá actualizar el documento con el id  628b672a29d1e9c48457597d`

- `db.users.remove` - server para remover un documento de la colección.

*Ejemplo:*

*db.users.remove({"_id": ObjectId("628b672a29d1e9c48457597d")})*

`//removerá el documento con el id 628b672a29d1e9c48457597d`








