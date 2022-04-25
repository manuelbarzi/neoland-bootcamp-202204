Fakay.prototype.map = function(callback){
    const result= []                     
    for (let i= 0; i<this.length;i++){     
        result[i] = callback(this[i])
        result.length++    // el resultado en fakay tiene longitud 0, cada vez que ponemos un dato en el result añadimos un indice
        // entonces no nos pone por defecto la longitud que va cogiendo, tenemos que poner que vaya sumando result.length++
    }
    return result
}



