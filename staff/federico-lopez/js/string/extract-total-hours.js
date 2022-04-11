function extractTotalHours(list) {
    var totalHours = 0
    for (let i = 0; i < list.length; i++) {
        let list1 = Number(list[i])
        let list2 = Number(list[i+1])
        if (!isNaN(Number(list[i]))) {
            if (!isNaN(Number(list[i+1]))) {
                if (list[i+2] === 'm') {
                    totalHours += (list1 * 10 + list2) / 60
                } else if (list[i+2] === 'h') {
                    totalHours += list1 * 10 + list2
                } else if (list[i+2] === 'd') {
                    totalHours += (list1 * 10 + list2) * 24
                }                        
            } else {
                if (list[i+1] === 'm') {
                    totalHours += list1 / 60
                } else if (list[i+1] === 'h') {
                    totalHours += list1
                } else if (list[i+1] === 'd') {
                    totalHours += list1 * 24
                }
            }
        }    
    }
    return totalHours
}

// function extractTotalHours(list) {
//     var totalHours = 0
//     for (let i = 0; i < list.length; i++) {
//         let list1 = Number(list[i])
//         let list2 = Number(list[i+1])
//         if (list[i] <= 9 && list[i] >= 0 && list[i] !== ' ') {
//             if (list[i+1] <= 9 && list[i+1] >= 0 && list[i+1] !== ' ') {
//                 if (list[i+2] === 'm') {
//                     totalHours += (list1 * 10 + list2) / 60
//                 } else if (list[i+2] === 'h') {
//                     totalHours += list1 * 10 + list2
//                 } else if (list[i+2] === 'd') {
//                     totalHours += (list1 * 10 + list2) * 24
//                 }                        
//             } else {
//                 if (list[i+1] === 'm') {
//                     totalHours += list1 / 60
//                 } else if (list[i+1] === 'h') {
//                     totalHours += list1
//                 } else if (list[i+1] === 'd') {
//                     totalHours += list1 * 24
//                 }
//             }
//         }    
//     }
//     return totalHours
// }