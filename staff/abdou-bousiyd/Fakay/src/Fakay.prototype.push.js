Fakay.prototype.push = function(...element) {

    let newArray = []

    newArray = `${this},${element}`.split(',')

    return newArray

}