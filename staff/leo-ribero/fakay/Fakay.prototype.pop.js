Fakay.prototype.pop = function() {
	const last = this[--this.length]

	//this[this.length] = undefined // WARN it does not remove the key, just the value
	delete this[this.length]

	return last
}