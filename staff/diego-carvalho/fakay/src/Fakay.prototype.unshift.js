Fakay.prototype.unshift = function unshift( ...elements) {
    for (let i = this.length - 1; i > -1; i--)
        this[i + elements.length] =  this[i]

    for (let i = 0; i < elements.length; i++)
        this[i] = elements[i]

        this.length = this.length + elements.length


    return this.length 
}