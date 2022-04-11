function extractStats(list) {
    var todos = 0
    var doings = 0
    var dones = 0
    for (var i = 0; i < list.length; i++){
        if(list[i] == "T" && list[i+1] == "O" && list[i+2] == "D" && list[i+3] == "O")
        {
            todos++
        } else if (list[i] == "D" && list[i+1] == "O" && list[i+2] == "N" && list[i+3] == "E")
        {
            dones++
        } else if(list[i] == "D" && list[i+1] == "O" && list[i+2] == "I" && list[i+3] == "N" && list[i+4] == "G"){
            doings++
        }
    }
    var newObject = {
        todo: todos,
        doing: doings,
        done: dones
    }
    return newObject
}