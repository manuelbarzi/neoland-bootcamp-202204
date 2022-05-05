/*
  - definir array result vacio
  - iterar los arguments (arrays)
  - concatenar cada argumento (array) en result
  - retornar result
  */
/*function concat() {
    const result = []

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

if (argument instanceof Array)
        for (let j = 0; j < argument.length; j++) {
            const currElem = argument[i]

            result[result.length] = currElem
        }
        else 
        result[result.length] = argument
    }
    return result
}*/
function concat (){
    let newArray = []
    for (let i = 0; i < arguments.length; i++) {
        for (let element of arguments[i]){
            newArray.push(element)
        }
    }
    return newArray
}

