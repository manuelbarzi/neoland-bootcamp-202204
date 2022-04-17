// function lastIndexOf(array, searchElement, fromIndex = 0){
// 	for (let i = fromIndex; i < array.length; i--) {
// 		var currentElement = array[i]

// 		if(currentElement === searchElement)
// 		return i

// 	}
// 	return -1

// }



///// codigo maquina fede

function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--)
        if (array[i] === value)
            return i
    return -1
}