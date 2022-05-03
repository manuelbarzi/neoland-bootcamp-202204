// USING PUSH METHOD

// function concat(array1, array2){
//     const result = []

//     for(let i = 0; i < array1.length; i++){
//         result.push(array1[i])
//     }

//     for(let i = 0; i < array2.length; i++){
//         result.push(array2[i])
//     }

//     return result

// }

// WITHOUT USING PUSH METHOD

function concat(array1, array2){
    const result = []
    
    for(let i = 0; i < array1.length; i++){
        result[i] = array1[i]
    }

    for(let i = 0; i < array2.length; i++){
        result[result.length] = array2[i]
    }

    return result

}

// JOIN 2 ARRAYS AND 1 ELEMENTS INSIDE AN ARRAY RETURNING A NEW ARRAY

function concat(array1, array2, element){
    const result = []
    
    for(let i = 0; i < array1.length; i++){
        result[i] = array1[i]
    }

    for(let i = 0; i < array2.length; i++){
        result[result.length] = array2[i]
    }

    result[result.length] = element

    return result

}

// JOIN VARIOUS ELEMENTS INSIDE AN ARRAY RETURNING A NEW ARRAY

function concat(){
    const result = []
    
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] instanceof Array){
            for(let j = 0; j < arguments[i].length; j++){
                result[result.length] = arguments[i][j]
            }
        }else{
        result[result.length] = arguments[i]
        }
    }
    return result
}
