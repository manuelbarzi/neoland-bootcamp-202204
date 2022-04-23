
Fakay.prototype.at = function(index) {

    if (index < 0)
        index = this.length + index

    const element = this[index]
    return element
}
