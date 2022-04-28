function splice(array, index, deleteCount, newElement){  //es index porque no hay end, sino seria fromIndex
    const deletedElements= [] //creamos con nombre deleted elements el nuevo array con los elementos borrados para irlos colocando

    if (deletedCount ===1){  //en el segundo ejemplo es como replazar donde se encuentre el indice donde replazarlo, por el elemento a remplazar, es decir 1x1
        deletedElements[0] = array[index] //el elemento que este en el viejo array en la posicion que nos marque el indice y que debamos borrar, pasará a ser el primer elemento del array de borrado en posición 0

        array[index]=newElement //esa elemento en el viejo array ya eliminado, pasará a ocupar su sitio el nuevo elemento que tengamos que adjuntar
    }else{ //si no hay elementos a borrar
        for (let i =array.length - 1; i>=index;i--)  //en el for la primera interaccion es la largura del array-1 (ultimo elemento), ya que queremos que ese ultimo elemento pase a un nuevo espacio a su derecha y asi todos puedan correrse uno a la derecha y no substituirse, restamos 1-- para ir hacia el principio.
            array[i+1] = array[i]    //este ultimo elemento que es el primero que pasa en el for, pasara a ocupar una posiciión mas de la que tenia para hacer un nuevo espacio
        
        array[index]=newElement //cuando terminen de moverse uno a la derecha todos los elementos, el nuevo elemento que tenemos que colocar, pasará a formar parte en ese array viejo en el indice que le den porque ya tendrá su hueco
    }

    return deletedElements
}
