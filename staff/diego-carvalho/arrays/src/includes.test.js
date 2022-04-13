console.log('TEST includes')

{
console.log('CASE 1')

const array = [1, 2, 3]

function includes(array, element, index = 0){
    for (let i = 0; i < array.length; i++) {
       if (array[i] === element) {

        return true
           
       }
        return false
    }
}

}
