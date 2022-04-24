// Only Positive Index
// function at(array, element){
//         return array[element]
//     }


// Positive and Negative Index

function at(array, element){
    if(element >= 0){
        return array[element]
    }else{
        return array[(array.length) + element]
    }
}

