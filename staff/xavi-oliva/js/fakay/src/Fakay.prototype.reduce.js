Fakay.prototype.reduce = function (callback, initialValue) { // callback(previousValue, currentValue)
    let accumulator

    if (initialValue !== undefined) {
        accumulator = initialValue

        for (let i = 0; i < this.length; i++) {
            const currentValue = this[i]

            accumulator = callback(accumulator, currentValue)
        }
    } else {
        accumulator = this[0]

        for (let i = 1; i < this.length; i++) {
            const currentValue = this[i]

            accumulator = callback(accumulator, currentValue)
        }
    }

    return accumulator
}