Fakay.prototype.lastIndexOf =function(searchvalue, start = 0) { 
    
    var from = start || this.length - 1

    for(let i = from; i >= 0; i--) {
            if (this[i] === searchvalue) {
            return i
        }
    }
    return -1
} 