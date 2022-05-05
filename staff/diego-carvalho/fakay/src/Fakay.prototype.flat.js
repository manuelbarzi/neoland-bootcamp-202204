Fakay.prototype.flat = function(deepth = 1) {
    
    const result = new Fakay   
    for (let i = 0; i < this.length; i++) {
        result.push(this[i])
    }
    
    for (let i = 0; i < result.length; i++) {
        for (let j = 1; j <= deepth; j++) {
            if (result[i] instanceof Fakay) {
                for (let k = result[i].length - 1; k >= 0; k--) {
                    result.splice(i + 1, 0, result[i][k])
                }
            } else {
                result.splice(i + 1, 0, result[i])
                j = deepth
            }
            result.splice(i, 1)
        }

    }

return result
}