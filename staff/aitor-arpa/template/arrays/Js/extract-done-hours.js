// Ejercicio 4:
function extractDoneHours(string){
    var done = 0

    for(var i = 0; i < string.length; i++) {
        if(string[i] === 'E') {
                for (j=i; j<string.length; j++){
                    if (string[j]>='0' && string[j]<='9'){
                        if (string[j+1]==='h'){
                            done = done + Number(string[j])
                            j=string.lenght
                        } 
                        else if (string[j+1]==='d') {
                            done = done + 24*Number(string[j])
                            j=string.lenght
                        }
                        else if (string[j+1]==='m') {
                            done = done + 0.5
                            j=string.lenght
                        }
                    }
                }
        }
    }
    return done
}

console.log(extractDoneHours(list))