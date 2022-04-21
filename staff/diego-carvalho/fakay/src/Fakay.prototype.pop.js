Fakay.prototype.pop = function pop() {
    const lastElem = this[this.length - 1]

    if (this.length)
        //this.length = this.length - 1
        this.length--

    return lastElem
}