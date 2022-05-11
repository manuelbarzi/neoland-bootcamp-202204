
Fakay.prototype.reverse = function(){
    const memory = new Fakay()
    for (let i = 0; i < this.length; i++){
        memory[this.length-1-i] = this[i]
        memory.length++
    }

    for (let i = 0; i < memory.length; i++){
        this[i] = memory[i]
    }

    return memory
}