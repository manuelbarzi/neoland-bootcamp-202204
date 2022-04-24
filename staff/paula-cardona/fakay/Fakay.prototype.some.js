Fakay.prototype.some = function (callback){
    for (let i= 0;i< this.length; i++) {
        
        const element = this[i]

        const result = callback(element)

        if(result) return true

    }

    return false
}

