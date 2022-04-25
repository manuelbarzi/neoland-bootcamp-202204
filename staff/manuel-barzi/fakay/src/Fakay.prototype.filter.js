Fakay.prototype.filter = function(callback) {
    const result = new Fakay

    for (let i = 0; i < this.length; i++) {
        const elem = this[i]

        if (callback(elem))
            result[result.length++] = elem
    }

    return result
}