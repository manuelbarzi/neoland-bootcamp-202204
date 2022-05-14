
Fakay.prototype.indexOf = function (searchElement, fromIndex = 0){

    for (var i = fromIndex; i < this.length; i++) {
        var currentElement = this[i]

        if (currentElement === searchElement)
           return i
    }
	return -1

}