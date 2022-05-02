Fakay.prototype.splice = function (start, removeCount = this.length - start, ...newElements) {
    if (start < 0) {
        // index = index + this.length
        start += this.length
    }

    const removedElements = new Fakay()

    if (removeCount === 1) {
        removedElements[0] = this[start]
        removedElements.length = 1

        for (let i = start; i < this.length - 1; i++)
            this[i] = this[i + 1]

        // this.length = this.length - 1
        // this.length -= 1
        this.length--
        delete this[this.length]
    } else if (removeCount > 1) {
        for (let i = 0; i < removeCount; i++) {
            removedElements[i] = this[start + i]
            removedElements.length++
        }

        for (let i = start; i < this.length - removeCount; i++)
            this[i] = this[i + removeCount]


        // this.length = this.length - deleteCount
        for (let i = this.length - removeCount; i < this.length; i++)
            delete this[i]

        this.length -= removeCount
    }

    if (newElements.length === 1) {
        for (let i = this.length - 1; i >= start; i--)
            this[i + 1] = this[i]

        this[start] = newElements[0]
        this.length++
    } else if (newElements.length > 1) {
        for (let i = this.length - 1; i >= start; i--)
            this[i + newElements.length] = this[i]

        for (let i = 0; i < newElements.length; i++)
            this[start + i] = newElements[i]

        this.length += newElements.length
    }

    return removedElements
}