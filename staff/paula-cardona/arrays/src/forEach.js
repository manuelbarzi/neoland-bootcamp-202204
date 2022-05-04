function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currElem = array[i] //guardamos cada elemento en currElem

        callback(currElem) //se aplica la callback en currElem que será ir sumando cada uno todos misma condición
    }
}