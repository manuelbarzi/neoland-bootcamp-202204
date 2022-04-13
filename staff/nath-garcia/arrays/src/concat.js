function concat(){
    /*
    - definir array result vacio
    - iterar los arguments (arrays)
    - concatenar cada argumento (array) en result
    - retornar result
    */


const result = []
let index = 0

for (let i = 0; i < arguments.length; i++){
    const array = arguments[i]

    for (let j = 0; j < array.length; j++){
        const currElem = array[i]

        result[index] = currElem

        index ++
    }
}
return result
}
