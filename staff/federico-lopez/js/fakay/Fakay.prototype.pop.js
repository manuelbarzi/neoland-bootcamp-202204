Fakay.prototype.pop = function() {
    let elementToPop = this[this.length - 1]
    delete this[--this.length]

    return elementToPop
}