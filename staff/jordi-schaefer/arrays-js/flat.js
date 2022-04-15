
function flat (array, niveles=1){  // recivo el array y los sub niveles que quiero profundizar
    const new_array = [] // creo el nuevo array que devolvere
    let n=0 // creo una constante para el nuevo array
    let c=1
    for (let i=0; i<array.length; i++){ //recorro el array que he recivido

        /*
        esto solo funciona con 1 sub nivel

        if (typeof array[i] === 'object'){ // si dentro tiene un objeto entro y lo recorro tambien
            for (let j=0; j<array[i].length; j++){
                new_array[n]=array[i][j] // en cada posicion dentro del objeto se lo añado al nuevo array
                n++
            }
        }
        */


        // caso para N iteraciones,  FUNCIONA la logica!! 

        // a tener en cuenta: el new_array tiene que se const porque sino sobreescribe al llamar a la nueva funcion dentro de la funcion
        // las variables 'n' y 'c' son nuevas y unicas dentro de cada sub-funcion
       if (typeof array[i] === 'object' && c<=niveles){ // si tengo 1 array y no he llegado al tope de niveles
           result = flat(array[i], niveles-1) // extraigo 1 mas
           for (let j=0; j<result.length; j++){
                new_array[n]=result[j] // en cada posicion dentro del objeto se lo añado al nuevo array
                n++
            }
            c++ // me apunto 1 nivel mas
       }


        else { // si no hay ningun objeto sino valor (numerico o string) o  ya he llegado al tope de niveles: lo añado al nuevo array
            new_array[n]=array[i]
            n++
        }
    }
    return new_array
}