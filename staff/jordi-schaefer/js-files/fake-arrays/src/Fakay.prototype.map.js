
Fakay.prototype.map = function (callback){
    const result = new Fakay
    for (let i = 0; i < this.length; i++){
        const currElem = this[i]  // la variable es constante, pero elimina y genera una nueva en cada ciclo
        result[i]=callback(currElem) // llamo a la funcion y le envio el elemento
        result.length++
    }
    return result
}