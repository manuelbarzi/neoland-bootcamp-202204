## How to install mongo

`npm i mongodb`

## Show a database

`show dbs`

## Create a database or use an existing one

`use database_name`

## Start working on VSC

`const { MongoClient } = require('mongodb')`

`MongoClient.connect('mongodb://localhost:27017')`

`const db = connection.db(<dbName>)`

`const collection = db.collection(<collectionName>)`

## INSERT a document

### insertOne

`db.collectionName.insertOne(<document>)`

##### Returns a document containing a boolean acknowledge as true if the operation ran with write concern or false and a field insertedId with the _id value.

### insertMany

`db.collectionName.insertMany(<array of documents>)`

## FIND a document

### findOne

`db.collection.findOne(<filter>)`

##### Returns the first document that matches the filter condition. If nothing is indicate as filter, it returns the las document registered. It is not possible to look for the id directly. It is neccessary to put `_id: ObjectId('idnumber')`

### find

`db.collection.find(<filter>)`

##### Returns an array of documents.

## Query and Projection operators

`$eq`

##### Find values equals to the query value

`$gt`

##### Find values greater than the query value

`$gte`

##### Find values equals or greaters than the query value

`$it`

##### Find values less than the query value

`$ite`

##### Find values less than the query value

`$ne`

##### Find values that are not equals to the query value

## Update Documents

### updateOne

`db.collection.updateOne(<filter>, <update>, <options>)`

##### The data to be update goes after the `$set` operator.
##### Within the third parameter `options` it is possible to add the `upsert` parameter. Behaves as insert if there is not document that matches the filter condition.

### updateMany

`db.collection.updateMany(<filter>, <update>)`

## Delete Documents

### deleteOne

`db.collection.deleteOne(<filter>)`

### deleteMany

`db.collection.deleteMany(<filter>)`