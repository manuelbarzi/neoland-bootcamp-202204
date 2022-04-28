function concat() {
    const result = []

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        if (argument instanceof Array)
            for (let j = 0; j < argument.length; j++) {
                const currElem = argument[j]

                result[result.length] = currElem
            }
        else
            result[result.length] = argument
    }

    return result
}