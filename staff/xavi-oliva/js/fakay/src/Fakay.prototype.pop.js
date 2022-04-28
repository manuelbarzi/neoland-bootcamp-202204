Fakay.prototype.pop = function () {

    const lastElem = this[--this.length]

    delete this[this.length]

    return lastElem

}