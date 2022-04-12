

function extractStats(string) {

    var result = {
        todo: 0,
        doing: 0,
        done: 0
    }

    for (var i = 0; i < string.length; i++) {
    
       if(string[i] === 'T') {
           result.todo++
       } else if(string[i] === 'E') {
           result.done++
       } else if(string[i] === 'G') {
           result.doing++
       }

    }
    return result
}

var result = extractStats(list)

console.log(result)

// { todo: 3, doing: 1, done: 2 }