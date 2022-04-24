Fakay.prototype.some = function some(callback) {
    /*
    - iterate "Fakay"
    - run callback with each element of "Fakay"
    - if callback returns true, then return true (breaking loop)
    - if callback never returns true, then return false
    */    
    for (let i = 0; i < this.length; i++){
        const element = this[i]
        
        const matches = callback(element)

        if (matches) return true
    }

    return false
}