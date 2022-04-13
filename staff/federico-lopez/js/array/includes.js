function includes(array, element, fromIndex = 0) {

    for(let i = fromIndex; i < array.length; i++){
        if (array[i] === element) {
            return true;
        }
    }
    return false;

 /*
    let newArray = array.slice(fromIndex)
    for (let value of newArray) {
        if (value === element) {
            return true
        }
    }
    return false;
*/
}