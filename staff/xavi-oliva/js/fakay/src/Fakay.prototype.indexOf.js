Fakay.prototype.indexOf = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        let currentElement = this[i]

        if (currentElement === searchElement)
            return i
    }

    return -1
}