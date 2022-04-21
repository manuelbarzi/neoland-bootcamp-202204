Fakay.prototype.at = function at(index) {
    if (index < 0)
        index = this.length + index

    const element = this[index]

    return element
}