var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`;

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