Fakay.prototype.reduce = function reduce(callback, initialValue = 0) {
    let accumulator = initialValue
    accumulator += callback(this[0], this[1])
    for (let i = 2; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator
}



