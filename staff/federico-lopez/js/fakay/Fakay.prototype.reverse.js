Fakay.prototype.reverse = function() {
    for (let i = 0; i < this.length; i++) {
        const lastItem = this[this.length - 1 - i]
        const firstItem = this[i]
        this[i] = lastItem
        this[this.length - 1 - i] = firstItem 
        if (i === this.length - 1 - i || i + 1 === this.length / 2)
            break
    }
    return this
}