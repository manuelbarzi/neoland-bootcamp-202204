
/*El método some() comprueba si al menos un elemento del array cumple con
 la condición implementada por la función proporcionada. */
 function some(array, callback){
    for( let i=0; i< array.length; i++){
        if (callback(array[i])){
            return true
        }
    }
    return false
}
/* function find(array,finder){
     for (let i = 0; i < array.length; i++) {
         const result = finder(array[i]);

         if (result === true) {

            return true
         }
         
     }
return false
     
 }
 */