Fakay.prototype.join = function (separator = ',') {
    
    let string = ''

    for (let i = 0; i < this.length; i++) {
        const currentElement = this[i];

        string += currentElement

        if (i < this.length -1)
            string += separator
        
    }

    return string
}