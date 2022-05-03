Fakay.prototype.shift =  function(){

    if(this.length){

        const removed = this[0]
    
        for(let i = 0; i < this.length; i++) {
    
            this[i] = this[i +1] 
        }
        this.length = this.length -1
        return removed
    }

}
