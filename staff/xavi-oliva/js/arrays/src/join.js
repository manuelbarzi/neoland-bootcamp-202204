

function join(array, separator = ',') {
    let string = ''

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]

        string += currentElement

        if (i < array.length - 1)
            string += separator
    }

    return string
}

