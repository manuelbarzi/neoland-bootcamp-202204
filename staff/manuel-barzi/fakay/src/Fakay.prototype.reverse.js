Fakay.prototype.reverse = function() {
    for (let i = 0; i < this.length / 2; i++) {
        const elemA = this[i]
        const elemB = this[this.length - 1 - i]

        this[i] = elemB
        this[this.length - 1 - i] = elemA
    }

    return this
}