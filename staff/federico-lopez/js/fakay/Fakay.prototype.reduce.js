Fakay.prototype.reduce = function(callback, initialValue) {
    let accumulator
    if (initialValue !== undefined) {
        accumulator = callback(initialValue, this[0])
        for (let i = 1; i < this.length; i++) {
            accumulator = callback(accumulator, this[i])
        }
    } else {
        accumulator = callback(this[0], this[1])
        for (let i = 2; i < this.length; i++) {
            accumulator = callback(accumulator, this[i])
        }
    }
    return accumulator
}