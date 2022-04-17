function concat(array1, array2) {
	let result = []
	let index = 0

	for (let i = 0; i < array1.length; i++){
		const currElem = array1[i]

		result[index] = currElem
		
		index++
	}
	for (let i =0; i < array2.length; i++){
		const currElem = array2[i]

		result[index] = currElem

		index++
	}
	return result
}