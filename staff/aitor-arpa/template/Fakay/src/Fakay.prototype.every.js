Fakay.prototype.every = function every(callback, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++)
        if(!callback(this[i])) return false
    return true
}