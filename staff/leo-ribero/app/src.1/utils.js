function chainPrototypes(parent, child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}


/*

UTILS Es una o caja de herramientas que automatiza un proceso. 
El de las herencias, de padre a hijo.


Ventu dice:
Mi App: tengo una caja de herramientas que ahora automatiza

Index.html es una pagina para cargar las cosas 
donde este div root es dondde vamos
a poner todo

Index.js:
es donde vamos articualando el contenido 
la funcionalidad (mis palabras)

*/