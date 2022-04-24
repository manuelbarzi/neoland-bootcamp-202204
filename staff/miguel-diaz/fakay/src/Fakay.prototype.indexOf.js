/*
- recorrer elementos del array
- comprobar si alguno de ellos es igual al element
- retornar el indice del element dentro del array
- si no lo encuentra, retornar -1
*/

Fakay.prototype.indexOf = function(searchElement, fromIndex = 0) {
    for (var i = fromIndex; i < this.length; i++) {
        var currentElement = this[i]

        if (currentElement === searchElement)
           return i
    }

   return -1
}