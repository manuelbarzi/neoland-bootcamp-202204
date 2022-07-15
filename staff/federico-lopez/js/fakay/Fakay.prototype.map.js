Fakay.prototype.map = function(callback) {
    newFakay = new Fakay
    for (let i = 0; i < this.length; i++) {
        const previousValue = this[i]
        const newValue = callback(previousValue)
        newFakay.push(newValue)
    }
    return newFakay
}