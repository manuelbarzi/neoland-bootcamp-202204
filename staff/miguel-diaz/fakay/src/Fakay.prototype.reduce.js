Fakay.prototype.reduce = function (callback, initialValue) { // callback(previousValue, currentValue)
    let previousValue

    if (initialValue !== undefined) {
        previousValue = initialValue

        for (let i = 0; i < this.length; i++) {
            const currentValue = this[i]

            previousValue = callback(previousValue, currentValue)
        }
    } else {
        previousValue = this[0]

        for (let i = 1; i < this.length; i++) {
            const currentValue = this[i]

            previousValue = callback(previousValue, currentValue)
        }
    }

    return previousValue
}