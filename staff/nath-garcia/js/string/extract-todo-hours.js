/*function extractTodoHours(list) {
    let todoHours = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "T" && list[i+1] == "O" && list[i+2] == "D" && list[i+3] == "O") {
            for (let j = i; j < list.length; j++) {
                let list1 = Number(list[j])
                let list2 = Number(list[j+1])
                if (list[j] <= 9 && list[j] >= 0 && list[j] !== ' ') {
                    if (list[j+1] <= 9 || list[j+1 >= 0]) {
                        if (list[j+2] === 'm') {
                            todoHours += (list1 * 10 + list2) / 60
                            j = list.length
                        } else if (list[j+2] === 'h') {
                            todoHours += list1 * 10 + list2
                            j = list.length
                        } else if (list[j+2] === 'd') {
                            todoHours += (list1 * 10 + list2) * 24
                            j = list.length
                        }                        
                    } else {
                        if (list[j+1] === 'm') {
                            todoHours += list1 / 60
                            j = list.length
                        } else if (list[j+1] === 'h') {
                            todoHours += list1
                            j = list.length
                        } else if (list[j+1] === 'd') {
                            todoHours += list1 * 24
                            j = list.length
                        }
                    }
                }
            }
        } 
    } return todoHours
}*/

//Function hecha por Manu
/*
- dividir list en lineas
- para cada linea localizar parentesis
- extraer lo que hay dentro
- identificar la unidad (si no es h, convertir)
- sumar (accumular)
- devolver la suma
*/

function extractTotalHours(list) {
    var lines = list.split('\n')
    
    var total = 0
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
    
        var from = line.indexOf('(') + 1
        var to = line.indexOf(')')
    
        var time = line.substring(from, to)
    
        var numeric = time.substring(0, time.length - 1)
    
        var value = Number(numeric)
    
        //if (time.indexOf('d') > -1)
       if (time.includes('d'))
            value = value * 24
       //else if (time.indexOf('m') > -1)
       else if (time.includes('m'))
            value = value / 60
    
       total += value
    }
 
    return total
 }