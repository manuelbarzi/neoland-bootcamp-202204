Fakay.prototype.keys = function() {
    const result = new Fakay
    for (let i = 0; i < this.length; i++)
        result.push(i)
    return result
}