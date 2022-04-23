Fakay.prototype.copyWithin = function(target, start = 0, end = this.length) {
    newFakay = new Fakay
    
    if (target < 0) {
        target += this.length
    }
    if (start < 0) {
        start += this.length
    }
    if (end < 0) {
        end += this.length
    }

    for (let i = start; i < end; i++) {
        newFakay[target] = this[i]
        target++
        newFakay.length++
        if (target === this.length) {
            for (let j = 0; j < newFakay.length + target; j++) {
                if (newFakay[j] !== undefined) {
                    this[j] = newFakay[j]
                }
            }
            return this
        }
    }
    for (let j = 0; j < newFakay.length + target; j++) {
        if (newFakay[j] !== undefined) {
            this[j] = newFakay[j]
        }
    }
    
    return this

}