Fakay.prototype.unshift = function() {
    for (let i = arguments.length; i >= 1; i--) {
        for (let j = this.length - 1; j >= 0; j--)
            this[j + 1] = this[j]
        this[0] = arguments[i - 1]
        this.length++
    }
    return this.length
}