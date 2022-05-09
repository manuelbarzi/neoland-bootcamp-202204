Fakay.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const elem = this[i]

        const result = callback(elem)

        if (result) return elem
    }
}