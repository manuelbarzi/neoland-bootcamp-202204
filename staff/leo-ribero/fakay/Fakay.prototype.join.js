// a mi concepto Fakay le estoy agregando el método
// Fakay.prototype.join = function(separator = ','){
//     let string = ''
// 	// declaro una variable de tipo string la cual igual a un string vacio
//     for (let i = 0; i < this.length; i++) {
// 		const currentElement = this[i]

// 		string += currentElement

// 		if (i < this.length - 1)
// 			string += separator
// 	}

// 	return string

// }
Fakay.prototype.join = function(separator = ','){
    let string = ''
	// declaro una variable de tipo string la cual igual a un string vacio
    for (let i = 0; i < this.length - 1; i++) {
		const currentElement = this[i]

		string += currentElement + separator

	}
	string += this[this.length - 1]

	return string

}
// join es un conversor