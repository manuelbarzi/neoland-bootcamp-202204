Fakay.prototype.filter = function(callback) {
    let result = new Fakay
    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        if (callback(element, i, this) === true) {
            result.push(element)
        }
    }
    return result
}