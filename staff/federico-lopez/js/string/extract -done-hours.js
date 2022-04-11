function extractDoneHours(string){
    let doneHours = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "D" && list[i+1] == "O" && list[i+2] == "N" && list[i+3] == "E") {
            for (let j = i; j < list.length; j++) {
                let list1 = Number(list[j])
                let list2 = Number(list[j+1])
                if (list[j] <= 9 && list[j] >= 0 && list[j] !== ' ') {
                    if (list[j+1] <= 9 || list[j+1 >= 0]) {
                        if (list[j+2] === 'm') {
                            doneHours += (list1 * 10 + list2) / 60
                            j = list.length
                        } else if (list[j+2] === 'h') {
                            doneHours += list1 * 10 + list2
                            j = list.length
                        } else if (list[j+2] === 'd') {
                            doneHours += (list1 * 10 + list2) * 24
                            j = list.length
                        }                        
                    } else {
                        if (list[j+1] === 'm') {
                            doneHours += list1 / 60
                            j = list.length
                        } else if (list[j+1] === 'h') {
                            doneHours += list1
                            j = list.length
                        } else if (list[j+1] === 'd') {
                            doneHours += list1 * 24
                            j = list.length
                        }
                    }
                }
            }
        } 
    } return doneHours
}
