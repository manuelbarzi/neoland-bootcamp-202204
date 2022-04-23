Fakay.prototype.splice = function(start, deleteCount = 0) {
    
    const deletedElements = new Fakay
    
    if (start > this.length) {
        start = this.length
        deleteCount = 0
    } else if (start === -Infinity){
        start = 0
    } else if (start < 0) {
        start = this.length + start
    }

    if (deleteCount < 0)
        deleteCount = 0

    if (arguments.length < 2)
        deleteCount = this.length - start

    while (deleteCount > 0) {
        deletedElements.push(this[start])
        for (let i = start; i < this.length; i++) {
            this[i] = this[i + 1]
        }
        this.pop()
        deleteCount--
    }

    for (let j = this.length - 1; j >= start; j--) {
        this[j + arguments.length - 2] = this[j] 
    }

    for (let i = arguments.length - 1; i >= 2; i--) {
        this[start + i-2] = arguments[i]    
    }

    this.length = this.length - deleteCount + arguments.length - 2

    if (arguments.length < 2)
        this.length = start

    return deletedElements
}