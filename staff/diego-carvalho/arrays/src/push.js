

//the arguments access the first element of the array and interact with them.
//add the values after each interaction in the last position of the array
//return the original array with a new length

function customPush() {
    array = arguments[0]
    for (let i = 0; i < arguments.length - 1; i++)
        array[array.length] = arguments[i + 1]//

    return array.length
}

