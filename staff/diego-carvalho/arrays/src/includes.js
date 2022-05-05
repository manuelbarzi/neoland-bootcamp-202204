
function includes(array, element, index = 0 ) {//parameters: array to check if it have the element we're looking and the  index =0

    for (let i = index; array.length; i++) {//a loop inside of array
        if (array[i] === element) {//check if the array have the element that we're looking

            return true //return true if it's found
        }

        return false// return false if is not found


    }
}