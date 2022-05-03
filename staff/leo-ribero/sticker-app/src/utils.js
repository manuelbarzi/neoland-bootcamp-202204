function chainPrototypes(parent, child) {
	child.prototype = Object.create(parent.prototype)
	child.prototype.constructor = child
}

function createID(){
	return (Math.random() + Date.now()).toFixed(10)
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed