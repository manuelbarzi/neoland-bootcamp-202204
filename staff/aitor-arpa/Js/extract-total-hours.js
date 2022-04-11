function extractTotalHours(string){
    var suma = 0

    for (i=0; i<string.length; i++){
        if (string[i]>='0' && string[i]<='9'){
            if (string[i+1]==='h'){
                suma = suma + Number(string[i])
            } 
            else if (string[i+1]==='d') {
                suma = suma + 24*Number(string[i])
            }
            else if (string[i+1]==='m') {
                suma = suma + 0.5
            }
        }

    }
    return suma
}

console.log(extractTotalHours(List))