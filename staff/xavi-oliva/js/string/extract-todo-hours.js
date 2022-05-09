function extractTodoHours(string) {
    var todo = 0

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
                for (j=i; j<string.length; j++){
                    if (string[j]>='0' && string[j]<='9'){
                        if (string[j+1]==='h'){
                            todo = todo + Number(string[j])
                            j=string.lenght
                        } 
                        else if (string[j+1]==='d') {
                            todo = todo + 24*Number(string[j])
                            j=string.lenght
                        }
                        else if (string[j+1]==='m') {
                            todo = todo + 0.5
                            j=string.lenght
                        }
                    }
                }
        }
    }
    return todo
}