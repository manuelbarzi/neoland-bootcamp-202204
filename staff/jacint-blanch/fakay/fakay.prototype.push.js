Fakay.prototype.push = function(){

    for (let i = 1; i < arguments.length; i++) {

        this[this.length] = arguments[i]
    }

    return this.length

}
