Fakay.prototype.filter = function filter(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        const element = this[i]
        if (callback(element) === true) {
            newArray.push(element)
        }
    }
    return newArray
}