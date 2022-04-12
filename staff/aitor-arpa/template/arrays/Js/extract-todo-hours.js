// Ejercicio 3:
function extractTodoHours(string){
    //extraer la horas de los TODO que nos faltan por hacer
    // deberian ser 26.5
    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
                for (j=i; j<string.length; j++){
                    if (string[j]>='0' && string[j]<='9'){
                        if (string[j+1]==='h'){
                            result.todo = result.todo + Number(string[j])
                            j=string.lenght
                        } 
                        else if (string[j+1]==='d') {
                            result.todo = result.todo + 24*Number(string[j])
                            j=string.lenght
                        }
                        else if (string[j+1]==='m') {
                            result.todo = result.todo + 0.5
                            j=string.lenght
                        }
                    }
                }
        }
    }
    return result.todo
}

console.log(extractTodoHours(list))