/*
   keep first element in ref
   iterate array forwardly
   return first element
*/

Fakay.prototype.shift = function () {
    if (this.length) {
        const first = this[0]

        for (let i = 0; i < this.length - 1; i++) {
            const next = this[i + 1]

            this[i] = next
        }

        this.length--

        return first
    }
}