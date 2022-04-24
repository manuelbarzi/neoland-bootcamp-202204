Fakay.prototype.lastIndexOf = function (searchElement, fromIndex = this.length - 1) { //defino el from index=array.length porque siempre començare por el ultimo elemento
        if (fromIndex >= 0)
            for (let i = fromIndex; i > -1; i--) {
                const currElem = this[i]
    
                if (currElem === searchElement) return i
            }
        else
            /*
            - i starts from array.length + fromIndex
            */
            for (let i = this.length + fromIndex; i > -1; i--) {
                const currElem = this [i]
    
                if (currElem === searchElement) return i
            }
    
        return -1
    }
    