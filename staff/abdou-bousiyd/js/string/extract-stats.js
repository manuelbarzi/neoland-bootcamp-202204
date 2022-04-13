var list = `TODO buy milk (30m)
TODO visit grandma (1d)
DONE go to gym (3h)
DOING learn js (6h)
DONE meditate (1h)
TODO meet friends (3h)`

function extractStats(list) {

    var result = {todo: 0, done: 0, doing: 0}

    for(var i = 0; i < list.length; i++) {
        
        if(list[i] === 'T' && list[i+1] === 'O' && list[i+2] === 'D' && list[i+3] === 'O') {
            result.todo++
        }
        if(list[i] === 'D' && list[i+1] === 'O' && list[i+2] === 'I' && list[i+3] === 'N'  && list[i+3] === 'G') {
            result.todo++
        }
        if(list[i] === 'D' && list[i+1] === 'O' && list[i+2] === 'N' && list[i+3] === 'E') {
            result.todo++
        }
    }
    console.log(result)
}

extractStats(list)