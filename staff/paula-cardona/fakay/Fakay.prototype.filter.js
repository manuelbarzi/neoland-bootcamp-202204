Fakay.prototype.filter = function (callback) {

    let newFakay = []

    for (let i = 0; i < this.length; i++) {

        const element = this[i]

        if (callback(element) === true) {

            newFakay.push(element)
        }

    }
    
    return newFakay
}