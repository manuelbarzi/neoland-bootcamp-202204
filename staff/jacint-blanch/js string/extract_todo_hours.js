var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`;



function extractTodoHours(list) {
    var isTodo = false
    var opened = false
    var total = 0
    var time = ''

    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'T' && list[i+1] === 'O' && list[i+2] === 'D' && list[i+3] === 'O') {
            isTodo = true
        }

        if (isTodo) {
            if (list[i] === '(') {
                opened = true
            }

            if (opened) {
                if (Number.isInteger(parseInt(list[i]))) {
                    time += list[i]
                } else {
                    if (list[i] === 'm') {
                        total += parseInt(time) / 60
                    }
                    if (list[i] === 'd') {
                        total += (parseInt(time) * 24)
                    }
                    if (list[i] === 'h') {
                        total += parseInt(time)
                    }
                }
            }

            if (list[i] === ')') {
                opened = false
                time = ''
                isTodo = false
            }
        }

    }

    console.log(total)
  }

  extractTodoHours(list);
  // 26.5