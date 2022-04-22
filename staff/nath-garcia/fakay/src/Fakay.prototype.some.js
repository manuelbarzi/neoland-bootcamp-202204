Fakay.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) {
        const currentEl = this[i]
        if (callback(currentEl))
            return true
    }
    return false

}