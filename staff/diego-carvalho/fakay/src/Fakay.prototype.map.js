Fakay.prototype.map = function map(callback){
 
    let newObj = new Fakay
    
    for(let i = 0; i < this.length; i++){

        const element = this[i]
        
        newObj[i]=callback(element) 

        newObj.length++
    }

    return newObj
}
