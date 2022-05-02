Fakay.prototype.slice = function(start = 0, end = this.length) {
    
    const result = new Fakay

    if (start > this.length)
        return result
    if (end > this.length)
        end = this.length
    if (start < 0) 
        start = this.length + start
    if (end < 0) 
        end = this.length + end

    for (let i = start; i < end; i++) {
        result.push(this[i])
    }

    return result

}