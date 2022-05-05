Fakay.prototype.map = function (callback) {
    const result = new Fakay

    for (let i = 0; i < this.length; i++) {
        const element = this[i]

        result[i] = callback(element)
        result.length++
    }

    return result
}