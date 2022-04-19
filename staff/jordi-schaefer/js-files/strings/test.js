var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`

printList(list) // expected output: undefined, prints: TODO buy milk (30m)
// TODO visit grandma (1d) DONE go to gym (3h) DOING learn js (6h)
// DONE meditate (1h) TODO meet friends (3h)

console.log('extractStats')
console.log(extractStats(list)) // expected output: {done: 3, todo: 2, doing: 1}

console.log(extractTotalHours(list)) // expected output: 37.5

console.log(extractTodoHours(list)) // expected output: 27

console.log(extractDoneHours(list)) // expected output:4




/*

var list = `
TODO buy milk (30min)
TODO visit grandma (1day)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h) 
TODO mett friends (3h)`
    

function printList(list) {
    console.log('REPORT')
    console.log(report)
}

printList(list)



// ejercicio 1:
function extractStats(string) {
    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
            result.todo++
        }
        else if(string[i] === 'E') {
            result.done++
        }
        else if(string[i] === 'G') {
            result.doing++
        }
    }
    return result
}

var result2 = extractStats(list)
console.log(result2) // Expected output: TODO: 3    DOING: 1    DONE: 2


// Ejercicio 2
function extractTotalHours(string){
    var suma = 0
    
    for (i=0; i<string.length; i++){
        if (string[i]>='0' && string[i]<='9'){
            if (string[i+1]==='h'){
                suma = suma + Number(string[i])
            } 
            else if (string[i+1]==='d') {
                suma = suma + 24*Number(string[i])
            }
            else if (string[i+1]==='m') {
                suma = suma + 0.5
            }
        }
    }
    return suma
}

console.log(extractTotalHours(list))


// Ejercicio 3:
function extractTodoHours(string){
    //extraer la horas de los TODO que nos faltan por hacer
    // deberian ser 26.5
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

console.log(extractTodoHours(list))



// Ejercicio 4:
function extractDoneHours(string){
    var done = 0

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'E') {
                for (j=i; j<string.length; j++){
                    if (string[j]>='0' && string[j]<='9'){
                        if (string[j+1]==='h'){
                            done = done + Number(string[j])
                            j=string.lenght
                        } 
                        else if (string[j+1]==='d') {
                            done = done + 24*Number(string[j])
                            j=string.lenght
                        }
                        else if (string[j+1]==='m') {
                            done = done + 0.5
                            j=string.lenght
                        }
                    }
                }
        }
    }
    return done
}

console.log(extractDoneHours(list))

*/