Fakay.prototype.concat = function (...elements) {
    result = new Fakay()

    for (i = 0; i < this.length; i++)
        result[result.length++] = this[i]
    // result.length++ con el ++ detras lo suma DESPUES de operar
    // con el ++ delante, incrementes ANTES de operar
    // por lo tanto opera con result.length y luego le suma el +1

    for (i = 0; i < elements.length; i++) {
        if (elements[i] instanceof Fakay) {
            for (j = 0; j < elements[i].length; j++)
                result[result.length++] = elements[i][j]
        }
        else
            result[result.length++] = elements[i]
    }

    return result
}