Fakay.prototype.pop = function () {
    const elementPopped = this[--this.length]

    
        // array.length = array.length - 1 //quito el último elemento
    delete this[this.length]

    return elementPopped
}