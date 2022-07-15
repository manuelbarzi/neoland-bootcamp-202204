Fakay.prototype.concat = function() {
    let result = new Fakay

    for (let i = 0; i < this.length; i++) {
        result[result.length++] = this[i]
    }

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Fakay) {
            for (let j = 0; j < arguments[i].length; j++) {
                result[result.length++] = arguments[i][j]
            }
        }
        else 
            result[result.length++] = arguments[i]
    }
    return result
}