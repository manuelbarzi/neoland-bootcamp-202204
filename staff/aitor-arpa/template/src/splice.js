// El primer valor indica el inicio de la modificacion
//El valor del es el indeice donde se añade el elemento o si es el mismo valor que array.length eliminara todo el array
// Elemen elemento a añadir
// Desplazar hacia atras los elementos a eliminar y modificar el largo de la array
// Donde esta el error de sintaxi ¿?

function splice(array, inicio = 0, del, item) {


    for (let i = array.length - 1; i >= inicio; i--) {
        array[i + 1] = array[i]
        if (i === inicio)
            array[inicio] = item

    }

    for (let i = inicio; i > array.length - 1; i++)
        array[i] = array[i + 1]






}
