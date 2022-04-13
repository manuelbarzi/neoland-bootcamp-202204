function extractTodoHours(list) {
    let todoHours = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "T" && list[i+1] == "O" && list[i+2] == "D" && list[i+3] == "O") {
            for (let j = i; j < list.length; j++) {
                let list1 = Number(list[j])
                let list2 = Number(list[j+1])
                if (list[j] <= 9 && list[j] >= 0 && list[j] !== ' ') {
                    if (list[j+1] <= 9 || list[j+1 >= 0]) {
                        if (list[j+2] === 'm') {
                            todoHours += (list1 * 10 + list2) / 60
                            j = list.length
                        } else if (list[j+2] === 'h') {
                            todoHours += list1 * 10 + list2
                            j = list.length
                        } else if (list[j+2] === 'd') {
                            todoHours += (list1 * 10 + list2) * 24
                            j = list.length
                        }                        
                    } else {
                        if (list[j+1] === 'm') {
                            todoHours += list1 / 60
                            j = list.length
                        } else if (list[j+1] === 'h') {
                            todoHours += list1
                            j = list.length
                        } else if (list[j+1] === 'd') {
                            todoHours += list1 * 24
                            j = list.length
                        }
                    }
                }
            }
        } 
    } return todoHours
}