function extractStats(string) {

    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(
            string[i] === 'T' &&
            string[i+1] === 'O' &&
            string[i+2] === 'D' &&
            string[i+3] === 'O'
        ) {
            result.todo++
        }
        else if(
            string[i] === 'D' &&
            string[i+1] === 'O' &&
            string[i+2] === 'N' &&
            string[i+3] === 'E'
        ) {
            result.done++
        }
        else if(
            string[i] === 'D' &&
            string[i+1] === 'O' &&
            string[i+2] === 'I' &&
            string[i+3] === 'N' &&
            string[i+4] === 'G'
        ) {
            result.doing++
        }
    }
    return result
}

function extractStatsV2(string) {

    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(
            string[i] === 'T' &&
            string[i+1] === 'O' &&
            string[i+2] === 'D' &&
            string[i+3] === 'O'
        ) {
            result.todo++
        }
        else if(
            string[i] === 'D' &&
            string[i+1] === 'O' &&
            string[i+2] === 'N' &&
            string[i+3] === 'E'
        ) {
            result.done++
        }
        else if(
            string[i] === 'D' &&
            string[i+1] === 'O' &&
            string[i+2] === 'I' &&
            string[i+3] === 'N' &&
            string[i+4] === 'G'
        ) {
            result.doing++
        }
    }
    return result

}