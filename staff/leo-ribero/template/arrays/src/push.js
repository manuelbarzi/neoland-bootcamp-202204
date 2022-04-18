function push(array) {
	array = arguments[0]
	for (let i = 0; i < arguments.length-1; i++) {
		array[array.length] = arguments[i+1]
	}
	return array
}

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

usamos el objeto argumento que nos permite pasar los parámetros o argumentos de la función como si fuera un Array
iteramos en función de los argumentos existentes
y añadimos el valor referenciado en cada iteración a la última posición del array
retornamos array

*/