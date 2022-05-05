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

/*
Declarative programming

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

 */