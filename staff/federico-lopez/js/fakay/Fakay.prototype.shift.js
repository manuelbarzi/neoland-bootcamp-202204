Fakay.prototype.shift = function() {
    
    if (this.length === 0)
        return undefined

    deletedElement = this[0]

    for (let i = 0; i < this.length; i++) 
        this[i] = this[i + 1]
    
    this.pop()
    return deletedElement

}