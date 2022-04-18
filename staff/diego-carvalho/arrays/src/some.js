
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

 /*function isBiggerThan12(value) {
        if (value > 12) {
            return true //if every value is bigger than 1 it will return true
        }
    }

    find(array1, isBiggerThan12)//here:function find with two elements(array and finder)

    console.assert(array1[3] === 130)//the arra1[3] === 130. True outprint 130 
}

 */