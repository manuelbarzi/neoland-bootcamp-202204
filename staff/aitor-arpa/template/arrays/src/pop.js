
function pop(array) {
    
    let elementDel = array[array.length - 1] // declaro variable para mostrar el elemento eliminado, para decir que es el ultimo uso el length -1 que es la ultima posicion
        if (array.length)
        array.length = array.length -1  // igualo el final de la array con la array menos el ultimo elemeto (-1)
        

    return elementDel  // devuelvo la palabra eliminada 
}   



