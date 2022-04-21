function Human() {
	const random = Math.random()

	this.gender =  random > .49 && random < .51? 'intersex' : random >= .51? 'female' : 'male'
	// que tipo de dato guarda random? > número, número aleatorio 
	// :  se debe entender como "si no". y "?" como "entonces"
	//<
	this.stomach = []//>>

	// (This*) (*A mi mismo) mi mismo, que me estoy creando, añado la propiedad… 
}

Human.prototype.drink = function(drink) {
	//<
	this.stomach.unshift(drink)//  array.prototype.unshift>
}

Human.prototype.eat = function(meal) {
	//<
	this.stomach.unshift(meal)//  array.prototype.unshift>
	
}

Human.prototype.poo = function() {
	//<
	this.stomach.splice(1, 3) //> para dejar el cero y borrar del 1 al 3 ( si pusiera otro parámetro sería el elemento que añadiría)
	return '💩'
}

Human.prototype.pee = function() {
	this.stomach.shift() // > array.prototype.shift para eliminar el primero
	return '💦'
}