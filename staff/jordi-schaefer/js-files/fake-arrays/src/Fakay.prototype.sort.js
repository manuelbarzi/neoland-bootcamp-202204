
Fakay.prototype.sort = function() {

    for (let i = 0; i < this.length; i++){
        
    }



}


































/* Fakay.prototype.sort = function(){

    let memoria = 0
    let n = 0

    for (let i = 0; i < this.length; i++){  // por cada elemento del array
        let indice = i                          // me guardo el indice actual
        for ( let j = i+1; j < this.length; j++){ // recorro todo el restante del array

            while (String(this[j])[n] = String(this[indice])[n]){        // si el primero son iguales, y mientras los siguientes sean iguales
                if (String(this[j])[n+1] < String(this[indice])[n+1]){   // comprueba los siguientes valores y cuando uno sea menos guarda el indice    
                    indice = j                    
                }   
                n++                
            }
            n=0


            if (String(this[j])[0] < String(this[indice])[0]){         // buscando el mas pequeño de todos los restantes
                indice = j                    //  guardo el indice
            }
        }     
        
        
        memoria = this[i]        // y los intercambio
        this[i] = this[indice]
        this[indice] = memoria
    }
} */






/*   
    // SELECTION SORT
    let memoria = 0

    for (let i = 0; i < array.length; i++){  // por cada elemento del array
        let indice = i                          // me guardo el indice actual
        for ( let j = i+1; j < array.length; j++){ // recorro todo el restante del array
            if (array[j]<array[indice]){         // buscando el mas pequeño de todos los restantes
                indice = j                    //  guardo el indice
            }
        }      
        memoria = array[i]        // y los intercambio
        array[i] = array[indice]
        array[indice] = memoria
    }


   
    // BUBBLE SORT
    let memoria = 0

    for (let i = 0; i < array.length; i++){  // por cada elemento del array
        for ( let j = 0; j < array.length-i-1; j++){ // recorro todo el restante del array, cada ciclo uno menos!
            if (array[j+1]<array[j]){         // si el valor siguiente es mas pequeño que el actual 
                memoria = array[j]        // los intercambio
                array[j] = array[j+1]
                array[j+1] = memoria
            }
        }
    }


    // MERGE SORT
    // el mas optimizado pero mas largo de escribir
    // separo todos en arbol de forma individual, y los voy unicoon ordenado, primero unitario, luego dos y dos, luego cuatro y cuatro...

*/
