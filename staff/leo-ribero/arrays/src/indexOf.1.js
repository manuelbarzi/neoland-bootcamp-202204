function indexOf(array, searchElement, fromIndex = 0){
	for (let i = fromIndex; i < array.length; i++) {
		var currentElement = array[i]

		if(currentElement === searchElement)
		return i
	}
	return -1
}
