Fakay.prototype.map = function map(callback){
 
    let nuevo_array = new Fakay
    
    for(let i = 0; i < this.length; i++){
        
        nuevo_array[i]=callback(this[i]) 
    }

    return nuevo_array
}
