function extractStats(list) {
    var stats = {} // object literal (= new Object)
    
    stats.todo = countPattern(list, 'TODO')
    stats.doing = countPattern(list, 'DOING')
    stats.done = countPattern(list, 'DONE')

    return stats
}