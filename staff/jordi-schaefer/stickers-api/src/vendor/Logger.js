console.log("Logger program loaded!")

class Logger {
    static DEBUG = 0
    static INFO = 1
    static WARN = 2
    static ERROR = 3
    static FATAL = 4


    #name
    //static #level = Logger.DEBUG
    static #level = 5

    constructor(name) {
        this.#name = name
    }


    // con esta funcion podemos escoger a partir de que nivel de errores queremos mostrar
    static setLevel(level) {
        if (level < Logger.DEBUG || level > Logger.FATAL)
            throw new Error(`invalid level ${level}`)

        Logger.#level = level
    }


    debug(message) {
        if (Logger.#level === Logger.DEBUG)
            console.log(`%cDEBUG%c ${new Date().toISOString()} %c${this.#name} ${message}`, 'color: green; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    info(message) {
        if (Logger.#level <= Logger.INFO)
            console.log(`%cINFO%c ${new Date().toISOString()} %c${this.#name} ${message}`, 'color: blue; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    warn(message) {
        if (Logger.#level <= Logger.WARN)
            console.log(`%cWARN%c ${new Date().toISOString()} %c${this.#name} ${message}`, 'color: gold; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    error(message) {
        if (Logger.#level <= Logger.ERROR)
            console.log(`%cERROR%c ${new Date().toISOString()} %c${this.#name} ${message}`, 'color: tomato; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    fatal(message) {
        if (Logger.#level <= Logger.FATAL)
            console.log(`%cFATAL%c ${new Date().toISOString()} %c${this.#name} ${message}`, 'color: white; background-color: tomato; font-weight: bold;', 'color: gray;', 'color: black;')
    }
}