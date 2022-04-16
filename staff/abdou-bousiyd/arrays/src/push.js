function push(array, ...element) {

    let newArray = []

    newArray = `${array},${element}`.split(',')

    return newArray

}