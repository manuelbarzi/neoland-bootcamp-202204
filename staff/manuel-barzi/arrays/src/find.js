function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const elem = array[i]

        const result = callback(elem)

        if (result) return elem
    }
}