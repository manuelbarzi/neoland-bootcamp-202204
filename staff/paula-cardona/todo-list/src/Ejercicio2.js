var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`

function printList(list) {
    console.log('REPORT:')
    console.log(list)
}

printList(list)


function countPattern(string, pattern) {
    var index = 0
    var count = 0
    
    /*
    while (string.indexOf(pattern, index) !== -1) {
        count++
    
        index = string.indexOf(pattern, index) + 1
    }
    /**/

    while ((index = string.indexOf(pattern, index)) !== -1) {
        count++
        index++
    }/**/
    
    return count  
}


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

console.log(extractTotalHours(list))
// 37.5

function extractTodoHours(list) {
    // TODO
}

extractTodoHours()
// 26.5

function extractDoneHours(list) {
    // TODO
}

extractDoneHours()
// 4