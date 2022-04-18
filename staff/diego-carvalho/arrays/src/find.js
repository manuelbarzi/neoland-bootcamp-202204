//1º function to find an specific number
//2º A loop(for)to run the array 
//3º A if to return the number if its found
function find(array,finder){
    for (let i = 0; i < array.length; i++) {
        const result = finder(array[i]);

        if (result === true) {

           return array[i]//return the array[i] that match with the callback(finder) found.
        }
        
    }

    
}
