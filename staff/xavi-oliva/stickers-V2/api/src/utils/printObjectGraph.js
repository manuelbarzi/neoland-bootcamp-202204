function getObjectGraph(object, indent = 0) {
    const indentation = ' '.repeat(indent * 2)

    let graph = `${indentation}{\n`

    const keys = Object.keys(object)

    for (const index in keys) {
        const key = keys[index]
        const value = object[key]

        graph += `${indentation + ' '.repeat(2)}${key}: ${!(value instanceof Object) ? value : getObjectGraph(value, indent + 1)},\n`
    }

    graph += `${indentation}}\n`

    return graph
}

function printObjectGraph(documentOrArray) {
    if (documentOrArray instanceof Array) {
        console.log('[')
        documentOrArray.forEach((element, index) => {
            console.log(` ${index}: ${getObjectGraph(element)},`)
        })
        console.log(']')
    } else console.log(getObjectGraph(documentOrArray))
}

module.exports = printObjectGraph
