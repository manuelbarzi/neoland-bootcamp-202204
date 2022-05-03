Fakay.prototype.indexOf = function(searchElement, start = 0){
    for(let i = start; i < this.length; i++){
        if(this[i]  === searchElement) return i
    }return -1
}


    
