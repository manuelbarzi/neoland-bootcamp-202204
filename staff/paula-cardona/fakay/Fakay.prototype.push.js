Fakay.prototype.push = function (){ //hay que cambiar los arguments o el array a ¡¡mi mismo porque no le pasamos ningun array, es sobre mi mismo ()
    //NO ESTA HECHO
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        array[array.length] = element
    }

    return array.length
}

/*arguments.length-1 significa que empieza por el ultimo,
arguments [i+1] querrá decir que empezamos a añadir en el 
último + 1 porque sino lo remplaza.


añado solo un elemento:
function push(array, element){
array [array.length] = element
return array-length
}*/



//no se borra el ultimo array, se queda como undefinded