function extractStats(list) {
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
/*
function extractStats(list) {
    var stats = {} // object literal (= new Object)
    
    stats.todo = countPattern(list, 'TODO')
    stats.doing = countPattern(list, 'DOING')
    stats.done = countPattern(list, 'DONE')

    return stats
}

console.log(extractStats(list))
// { todo: 3, doing: 1, done: 2 }


/*
- dividir list en lineas
- para cada linea localizar parentesis
- extraer lo que hay dentro
- identificar la unidad (si no es h, convertir)
- sumar (accumular)
- devolver la suma
*/