Fakay.prototype.lastIndexOf = function(value, fromIndex = this.length - 1) {
    for (let i = fromIndex; i >= 0; i--)
        if (this[i] === value)
            return i
    return -1
}