Fakay.prototype.find = function find(finder){
    for (let i = 0; i < this.length; i++) {
        const result = finder(this[i]);

        if (result === true) {

           return this[i]//return the this[i] that match with the callback(finder) found.
        }
        
    }

    
}
