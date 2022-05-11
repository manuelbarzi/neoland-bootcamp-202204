function extractStats_2(string) {

    var result = {todo: 0, doing: 0, done: 0}

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
            result.todo++
        }
        else if(string[i] === 'E') {
            result.done++
        }
        else if(string[i] === 'G') {
            result.doing++
        }
    }
    return result
/*
    if (list.include("TODO")){
        result.todo++
    }
*/
}



function extractStats(string){

    function busca(lista, palabra){
        var n=0
        var i=0
        while ((i=lista.indexOf(palabra, i)) !== -1){
            i++
            n++
        }
        return n
    }

    var result = {}
    result.todo=busca(list,'TODO')
    result.doing=busca(list,'DOING')
    result.done=busca(list,'DONE')

    return result
    
    //list.indexOf(`TODO`, 0) // devuelve el primer indice donde encuentra esta cadena
    // empezando ocn la posicion del numero
    //list . / el punto me permite acceder a la lista
}