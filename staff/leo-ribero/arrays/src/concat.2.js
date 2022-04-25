// function concat(array1, array2) {
// 	let result = []
// 	let index = 0

// 	for (let i = 0; i < array1.length; i++){
// 		const currElem = array1[i]

// 		result[index] = currElem
		
// 		index++
// 	}
// 	for (let i =0; i < array2.length; i++){
// 		const currElem = array2[i]

// 		result[index] = currElem

// 		index++
// 	}
// 	return result
// }

function concat() {
	/*
	- definir array result vacio
	- iterar los argumets (array)
	- concatenar cada arguent (array) en result
	- returnar result
	*/

	const result = []
	let index = 0

	for (let i = 0; i < arguments.length; i++){
		const array = arguments[i]
		
		for (let j = 0; j < array.length; j++ ){
			const currElem = array[j]
			
			result[index] = currElem
			
			index++
		}
	}
	return result  



}