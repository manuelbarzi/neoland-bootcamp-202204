/*const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']*/

function concat(){
    result = []
    n=0
    for (j=0; j<arguments.length; j++){
        if (arguments[j] instanceof Array)
            for (i=0; i<arguments[j].length; i++){
                result[n]=arguments[j][i]
                n++
            }
        else {
            result[n]=arguments[j]
            n++
        }
    }
    return result
}