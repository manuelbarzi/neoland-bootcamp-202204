Fakay.prototype.sort = function() {
    
    fakayOfTypeNumbers = new Fakay()

    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === 'number') {
            fakayOfTypeNumbers.push(this[0])
        }
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== undefined)
            this[i] = String(this[i])
    }

    for (let i = 0; i < this.length - 1; i++) {
        let smallestValue = this[i]
        let smallestIndex
        for (let j = 1 + i; j < this.length; j++) {
            if (this[j] < this[i] && this[j] < smallestValue) {
                smallestIndex = j
                smallestValue = this[j]
            }
        }
        if (smallestIndex !== undefined) {
            for (let k = smallestIndex; k >= i + 1; k--) {
                this[k] = this[k-1]
            }
            this[i] = smallestValue
        }
    }

    for (let i = 0; i < fakayOfTypeNumbers.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[i] == this[j]) {
                this[j] = Number(this[j])
                j = this.length
            }
        }
    }

    return this
}