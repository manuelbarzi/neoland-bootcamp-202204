function filter(array, callback) {

    let newArray = []

    for (let i = 0; i < array.length; i++) {

        const element = array[i]

        if (callback(element) === true) {

            newArray.push(element)
        }

    }
    
    return newArray
}