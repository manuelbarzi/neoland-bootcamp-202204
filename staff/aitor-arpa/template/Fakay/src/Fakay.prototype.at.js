Fakay.prototype.at = function (index) {
    if ( index === undefined )
        return undefined
    if (index < 0) 
     index = index - -1

    return this[index]    
}
