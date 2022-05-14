// Fakay.prototype.concat = function(){

//     const result = []
//     let index = 0

//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i]

//         if (argument instanceof Array)
//             for (let j = 0; j < argument.length; j++) {
//                 const currElem = argument[j]

//                 result[index] = currElem

//                 index++
//             }
//         else {
//             result[index] = argument

//             index++
//         }
//     }

//     return result


// }

Fakay.prototype.concat = function(){
    // ver fri 22 April 11h 30m
    const result = new Fakay
    let index = 0

    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i]

        if (argument instanceof Array)
            for (let j = 0; j < argument.length; j++) {
                const currElem = argument[j]

                result[index] = currElem

                index++
            }
        else {
            result[index] = argument

            index++
        }
    }

    return result


}
