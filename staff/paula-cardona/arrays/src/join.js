function join(array, separator = ',') {        //la funcion espera por parametro un nuevo array y un separador que por defecto es ,
let string = ''                             //declaro una variable q sera del tipo string que espera un string vacio
                                            //hago el string porque el return siempre lo será
    for (let i = 0; i < array.length; i++) { //realizo un bucle, el cual tiene la condicion de parada. 
                                             //que i sea menor a mi mismo.
        const currentElement = array[i]
        string += currentElement

        if (i < array.length - 1) //si i es mas pequeño que el end del array entonces coma, si es mas grande se termina
        string += separator   //al string actual se le añade el separador, por defecto es ,  
    }
    return string         // te devuelve la string nueva
}

