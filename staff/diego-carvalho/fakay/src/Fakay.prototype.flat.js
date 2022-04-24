Fakay.prototype.flat = function flat(deepth = 1) {
    
    const newFakay = new Fakay
    /*for (element of this) {
        newFakay.push(element)
    }*/
    for (let i = 0; i < this.length; i++) {
        newFakay.push(this[i])
        
    }
    for (let i = 0; i < newFakay.length; i++) {
        for (let j = 1; j <= deepth; j++) {
            if (newFakay instanceof Fakay) {
                for (let k = newFakay.length; k >= 0; k--) {
                    newFakay.splice(i + 1, 0, newFakay[i][k])
                }
            } else {
                newFakay.splice(i + 1, 0, newFakay[i])
                j = deepth
            }
            newFakay.splice(i, 1)
        }

    }
    return newFakay
}
