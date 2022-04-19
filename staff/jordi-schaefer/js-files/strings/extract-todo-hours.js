function extractTodoHours_2(string) {
    var todo = 0

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'T') {
                for (j=i; j<string.length; j++){
                    if (string[j]>='0' && string[j]<='9'){
                        if (string[j+1]==='h'){
                            todo = todo + Number(string[j])
                            j=string.lenght
                        } 
                        else if (string[j+1]==='d') {
                            todo = todo + 24*Number(string[j])
                            j=string.lenght
                        }
                        else if (string[j+1]==='m') {
                            todo = todo + 0.5
                            j=string.lenght
                        }
                    }
                }
        }
    }
    return todo
}




function extractTodoHours(list){
    total = 0
    // genera una lista con cada una de las lineas
    var lineas=list.split('\n')
    // recorre cada una de lasl ineas
    for (var i=0; i<lineas.length; i++){
        //extraigo la linea
        var linea=lineas[i]
        if (linea.includes('TODO')){
            // establezco los limites para buscar numeros
            var from = linea.indexOf('(')+1
            var to = linea.indexOf(')')
            // busco los datos que estan entre los limites
            var time = linea.substring(from, to)
            // extraigo numero
            var value = Number(time.substring(0, time.length-1))
            
            // segun la letra que incluye sumo horas correspondientes
            // if (time.indexOf('d') > -1)
            if (time.includes('d'))
                value = value*24
            else if (time.includes('m'))
                value = value/60
            
            total = total + value   
        } 
    }
    return total 
}