function pop(array) {
    const lastElem = array[array.length - 1] //declaro el last element como el elemento en el array que esta en la última posición. y este elemento es tomato ya que tiene []
                                            //es decir quiere saber como se llama en el array el elemento en la utlima posición
    if (array.length)
        //array.length = array.length - 1  //como te devuelve un nuevo length aquí explica que la nueva longitus será el del array sin ese elemento
        array.length--   //-- es -1

    return lastElem
}
    
/* hago pequeño una posición el array con array.length-1*/