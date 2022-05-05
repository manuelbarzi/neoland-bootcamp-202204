Fakay.prototype.filter = function(callback) {
    const result = new Fakay

    for (let i = 0; i < this.length; i++){
        const element = this[i]

        if (callback(element))
            result[result.length++] = element
    }
    return result
}

//TODO explicación de Fede de funcion flecha con este método 11.50 del 14/4 y explicación de or|| y con && -pull request de fede-