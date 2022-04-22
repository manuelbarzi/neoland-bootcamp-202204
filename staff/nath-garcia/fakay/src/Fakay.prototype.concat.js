Fakay.prototype.concat = function () {
    const result = new Fakay

    for (let i = 0; i < this.length; i++)
        result[result.length++] = this[i]

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        if (argument instanceof Fakay)
            for (let j = 0; j < argument.length; j++) {
                const currElem = argument[j]

                result[result.length] = currElem
                result.length++
            } else {
            result[result.length] = argument
            result.length++
        }
    }
    return result
}
