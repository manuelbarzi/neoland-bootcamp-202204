//Function hecha con Fede

    function extractTotalHours(list) {
    var totalHours = 0
    for (let i = 0; i < list.length; i++) {
        let list1 = Number(list[i])
        let list2 = Number(list[i+1])
        if (!isNaN(Number(list[i]))) {
            if (!isNaN(Number(list[i+1]))) {
                if (list[i+2] === 'm') {
                    totalHours += (list1 * 10 + list2) / 60
                } else if (list[i+2] === 'h') {
                    totalHours += list1 * 10 + list2
                } else if (list[i+2] === 'd') {
                    totalHours += (list1 * 10 + list2) * 24
                }                        
            } else {
                if (list[i+1] === 'm') {
                    totalHours += list1 / 60
                } else if (list[i+1] === 'h') {
                    totalHours += list1
                } else if (list[i+1] === 'd') {
                    totalHours += list1 * 24
                }
            }
        }    
    }
    return totalHours
}

// function extractTotalHours(list) {
//     var totalHours = 0
//     for (let i = 0; i < list.length; i++) {
//         let list1 = Number(list[i])
//         let list2 = Number(list[i+1])
//         if (list[i] <= 9 && list[i] >= 0 && list[i] !== ' ') {
//             if (list[i+1] <= 9 && list[i+1] >= 0 && list[i+1] !== ' ') {
//                 if (list[i+2] === 'm') {
//                     totalHours += (list1 * 10 + list2) / 60
//                 } else if (list[i+2] === 'h') {
//                     totalHours += list1 * 10 + list2
//                 } else if (list[i+2] === 'd') {
//                     totalHours += (list1 * 10 + list2) * 24
//                 }                        
//             } else {
//                 if (list[i+1] === 'm') {
//                     totalHours += list1 / 60
//                 } else if (list[i+1] === 'h') {
//                     totalHours += list1
//                 } else if (list[i+1] === 'd') {
//                     totalHours += list1 * 24
//                 }
//             }
//         }    
//     }
//     return totalHours
// }

/*
- dividir list en líneas
- para cada línea localizar parentesis
- extraer lo que hay dentro
- identificar la unidad (si no es h, convertir)
- sumar (accumular)
- devolver la suma
*/

function extractTotalHours(list) {
    var lines = list.split('\n');

    var total = 0

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]

        var from = line.indexOf('(') + 1
        var to = line.indexOf(')')

        var time = line.substring(from, to)

        var numertic = time.substring(0, time.lenght -1)

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