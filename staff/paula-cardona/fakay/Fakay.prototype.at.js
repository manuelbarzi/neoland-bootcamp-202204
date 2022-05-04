Fakay.prototype.at= function at (index){
    let result //vacío
        if (index>0){ //hago un if para hacer una caso en el que indice es positivo y otro negativo
            result=this[index]   //si declaro el result dentro del if solo existirá dentro de los corchetes del que lo declares
        }                       //el array index sera el propio index y el contenido en esa posición
        else {
           result= this [this.length+index] //sino, es decir si el indice es negativo, el resultado sera la largura del array.lenght +(-2) que sera el indice, dentro del array
        }
        return result
    }
    
    