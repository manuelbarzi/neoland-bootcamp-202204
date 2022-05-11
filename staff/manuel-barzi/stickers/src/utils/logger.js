class Logger {
    static DEBUG = 0
    static INFO = 1
    static WARN = 2
    static ERROR = 3
    static FATAL = 4

    // constructor() {
    //     this.#level = Logger.DEBUG
    // }
    #level = Logger.DEBUG

    setLevel(level) {
        if (level < Logger.DEBUG || level > Logger.FATAL)
            throw new Error(`invalid level ${level}`)

        this.#level = level
    }

    debug(message) {
        if (this.#level === Logger.DEBUG)
            console.log(`%cDEBUG %c${new Date().toISOString()} %c${message}`, 'color: green; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    info(message) {
        if (this.#level <= Logger.INFO)
            console.log(`%cINFO %c${new Date().toISOString()} %c${message}`, 'color: blue; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    warn(message) {
        if (this.#level <= Logger.WARN)
            console.log(`%cWARN %c${new Date().toISOString()} %c${message}`, 'color: gold; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    error(message) {
        if (this.#level <= Logger.ERROR)
            console.log(`%cERROR %c${new Date().toISOString()} %c${message}`, 'color: tomato; font-weight: bold;', 'color: gray;', 'color: black;')
    }

    fatal(message) {
        if (this.#level <= Logger.FATAL)
            console.log(`%cFATAL%c ${new Date().toISOString()} %c${message}`, 'color: white; background-color: tomato; font-weight: bold;', 'color: gray;', 'color: black;')
    }
}

const logger = new Logger
//logger.setLevel(Logger.ERROR)