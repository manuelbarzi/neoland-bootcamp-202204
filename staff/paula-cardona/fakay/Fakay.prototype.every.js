Fakay.prototype.every = function(array,callback){
for( let i=0; i< array.length; i++){ //recorre la array y no hace falta guardar los numeros porque no hace falta que nos los muestre.
    if (!callback(array[i])){ //si el callback del array[i] no es verdadero, return false, sino return true
        return false
    }
}
return true
}

