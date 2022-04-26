Fakay.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const currentValue = this[i]
        if (callback(currentValue))
        return true 
    }
    return false

}