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

// { todo: 3, doing: 1, done: 2 }