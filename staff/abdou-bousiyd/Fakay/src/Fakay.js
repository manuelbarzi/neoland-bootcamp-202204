function Fakay() {
    for (let i = 0; i < arguments.length; i++) {
        const elem = arguments[i]

        this[i] = elem
    }

    this.length = arguments.length
}

const letras = new Fakay(3, 5, 6, 8)
