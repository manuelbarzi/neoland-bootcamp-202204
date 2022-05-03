// function flat(array){
//     const flated = []

//     for(let i = 0; i <= array.length -1; i++){
//         if(array[i] instanceof Array){
            
//             for(let j = 0; j <= array[i].length -1; j++){
//                 if(array[i][j] instanceof Array){
                    
//                 } else {
//                     flated[flated.length] = array[i][j]
//                 }
//             }


//         } else {
//             flated[flated.length] = array[i]
//         }
        
//     }

//     return flated
// }

function flat(array, flated = []){

    for(let i = 0; i <= array.length -1; i++){
        if(array[i] instanceof Array){
            
            flat(array[i], flated)


        } else {
            flated[flated.length] = array[i]
        }
        
    }

    return flated
}


// [1, 5, 8, [10, 40]]
// detectar si hay un array y si no pushear
// si es un array volver a iterar y hacer lo mismo