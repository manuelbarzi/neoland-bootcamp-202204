function countPattern(string, pattern) {
	var index = 0
	var count = 0
	
	/*
	while (string.indexOf(pattern, index) !== -1) {
		count++
	
		index = string.indexOf(pattern, index) + 1
	}
	/**/

	while ((index = string.indexOf(pattern, index)) !== -1) {
		count++
		index++
	}/**/
	
	return count  
}