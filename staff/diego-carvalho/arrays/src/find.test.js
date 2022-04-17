
console.log('TEST find')


    console.log('CASE 01')

    const array1 = [5, 12, 8, 130, 44];


    // expected output: 12
 
function isBiggerThan12(value) {
    if (value > 12) {
        return true
    }
}
//1º function to find an specific number
//2º A loop(for)to run the array 
//3º A if to return the number if its found
 function find(array,finder){
     for (let i = 0; i < array.length; i++) {
         const result = finder(array[i]);

         if (result === true) {

            return array[i]
         }
         
     }

     
 }

