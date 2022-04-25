function Fakay() {
    for (let i = 0; i < arguments.length; i++) {
        const elem = arguments[i]

        this[i] = elem
    }
    this.length = arguments.length
}

// Object.defineProperty(Fakay.prototype, "length", {
//     get: function length() {
//         this.length = this.keys().length
//     }
// })