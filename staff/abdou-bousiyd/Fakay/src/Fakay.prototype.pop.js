Fakay.prototype.pop = function() {

    const removed = this[this.length -1]
    
    this.length = this.length -1

    return removed
    // return array.splice(array.length-1, 1)
}