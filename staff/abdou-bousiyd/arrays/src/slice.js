// function slice(array, start = 0, end){
//     const removed = array[start ]
    
//     for(let i = 0; i < array.length; i++) {
//         array[i] = array[i + start] 

//         if(i === end){
//             const isStart = array.length - start 
//             const isEnd = end - start -1

//             array.length = isStart - isEnd

//             return removed
//         }
//     }
//     array.length = array.length - start
//     return removed
// }

function slice(array, start = 0, end = array.length -1){
    const newArray = []
    if(start > 0) {
        for(let i = start; i < end; i++) {
            newArray[newArray.length] = array[i]
            
        }
        array.length = newArray.length
        for(let i = 0; i < array.length; i++) {
            array[i] = newArray[i]        
        }
        
    } else {

        for(let i = array.length -1; i >= array.length +start ; i--) {
            newArray[newArray.length] =array[i]
            
        }
        array.length = newArray.length    
        for(let i = newArray.length -1; i >= 0; i--) {
            array[i] = newArray[i]  
        }
        array.reverse()
    }

    return array
}