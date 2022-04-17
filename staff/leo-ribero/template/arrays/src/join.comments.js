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