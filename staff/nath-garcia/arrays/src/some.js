//const even = (element) => element % 2 === 0;

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentEl = array[i]
        if (callback(currentEl))
            return true
    }
    return false

}