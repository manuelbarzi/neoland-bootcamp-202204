function concat() {
	/*
	- definir array result vacio
	- comprobar si es un Array mediante instanceof,
		si no es un array, enviarlos a result
	- iterar los argumets (array) si es un array
	- concatenar cada arguent (array) en result
	- returnar result

	*/

	const result = []
	let index = 0

	for (let i = 0; i < arguments.length; i++){
		const argument = arguments[i]

		if (argument instanceof Array)

			for (let j = 0; j < argument.length; j++ ){
				const currElem = argument[j]
				
				result[index] = currElem
				
				index++
			}
		else {
			result[index] = argument
				
			index++
		}
			
	}
	return result  
}