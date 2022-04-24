Fakay.prototype.at = function(element){

     if(element >= 0){
        return this[element]
    }else{
        return this[(this.length) + element]
    }
}


   
