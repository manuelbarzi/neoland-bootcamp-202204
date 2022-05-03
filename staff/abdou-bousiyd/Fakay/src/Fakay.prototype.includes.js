
Fakay.prototype.includes = function(element, position = 0) { 

    for(let i = position; i < array.length; i++) {
        if(this[i] === element) return true
    }
    return false
}