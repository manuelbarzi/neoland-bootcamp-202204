/*
- recorrer elementos del array
- comprobar si alguno de ellos es igual al element
- retornar el indice del element dentro del array
- si no lo encuentra, retornar -1
*/

// function indexOf(array, searchElement, fromIndex = 0) {
// 	for (var i = fromIndex; i < array.length; i++) {
// 		var currentElement = array[i]

// 		if (currentElement === searchElement)
// 		   return i
// 	}

//    return -1
// }

function indexOf(array, searchElement, fromIndex = 0){
	for (let i = fromIndex; i < array.length; i++) {
		var currentElement = array[i]
		// almaceno el indice de array en cada iteración en una nueva variable

		if(currentElement === searchElement)
		return i
		// si currentElement es igual al elemento buscado, retorno i
	}
	return -1

}
