
function sort (array){


    let memoria = 0
    let n = 0

    for (let i = 0; i < array.length; i++){  // por cada elemento del array
        let indice = i                          // me guardo el indice actual
        for ( let j = i+1; j < array.length; j++){ // recorro todo el restante del array

            while (String(array[j])[n] = String(array[indice])[n]){        // si el primero son iguales, y mientras los siguientes sean iguales
                if (String(array[j])[n+1] < String(array[indice])[n+1]){   // comprueba los siguientes valores y cuando uno sea menos guarda el indice    
                    indice = j                    
                }   
                n++                
            }
            n=0


            if (String(array[j])[0] < String(array[indice])[0]){         // buscando el mas pequeño de todos los restantes
                indice = j                    //  guardo el indice
            }
        }     
        
        
        memoria = array[i]        // y los intercambio
        array[i] = array[indice]
        array[indice] = memoria
    }

}