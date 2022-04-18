

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currElem = array[i]

        callback(currElem)
    }
}