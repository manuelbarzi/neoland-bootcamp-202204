//ejercicio 1:
function extractStats(string) {
    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
            result.todo++
        }
        else if(string[i] === 'E') {
            result.done++
        }
        else if(string[i] === 'G') {
            result.doing++
        }
    }
    return result
}

var result2 = extractStats(string)
console.log(result2) // Expected output: TODO: 3    DOING: 1    DONE: 2 */


/*function extractStats(list) {
    let todos = 0
    let dones = 0
    let doings = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "T" && list[i+1] == "O" && list[i+2] == "D" && list[i+3] == "O") {
            todos++
        } else if (list[i] == "D" && list[i+1] == "O" && list[i+2] == "N" && list[i+3] == "E") {
            dones++
        } else if (list[i] == "D" && list[i+1] == "O" && list[i+2] == "I" && list[i+3] == "N" && list[i+4] == "G") {
            doings++
        } 
    }
    let newObject = {
        todo: todos,
        doing: doings,
        done: dones
    }
    return newObject
}
