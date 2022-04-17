// at 

function at(array, index) {
    if (index < 0)
        index = array.length + index

    const element = array[index]

    return element
}


///////////////



// indexOf 
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

// join 
/*
TODO define steps to solve the function
*/

function join(array, separator = ',') {
	let string = ''

	for (let i = 0; i < array.length; i++) {
		const currentElement = array[i]

		string += currentElement
		// con += hago dos cosas, añado el valor de la derecha
		// a la variable y asigno el resultado a la variable

		if (i < array.length - 1)
			string += separator
		// consigo que añada el separador siempre que no sea la última posición
		// si length es 3, length -1 es 2. añade separador hasta despues 
		// de la penúltima posición
	}

	return string
}