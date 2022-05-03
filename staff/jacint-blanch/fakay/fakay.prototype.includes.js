Fakay.prototype.includes = function(searchElement, fromIndex = 0){

    for (let i = fromIndex; i < this.length; i++)
        if (this[i] === searchElement) 
            return true

    return false
}