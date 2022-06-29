# #Vista Codigo
`escribir codigo`


## Muestra la Base de Datos ->

`show dbs`


# #Crear Base de datos
`use database_name`

# #Ayuda sobre comandos de la Base de datos
`db.help()`

# #Ayuda sobre comandos que podemos hacer a una colecion
`db.colletionName()`


## Crer documento dentro de una coleccion

## Ej

`db.collectionName.insertOne({ 
// Document in JSON format 
})`

## Ej con JSON

`db.inventory.insertOne({ 
      item:"canvas", 
      qty:100, 
      tags:["cotton"], 
      size: {
      h:28, 
      w:35.5, 
      uom:"cm"}
       })`

## Insertar diferentes JSON

  `` db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }] )
Si todos nue])``


# Busqueda de datos find() 

##  //Nos regresara todos los documentos donde el item sea igual a "canvas"

`db.inventory.find("5cfd49c9edbc9424e14849ae")
  
  db.inventory.find({item: "canvas"})`

## Bus




