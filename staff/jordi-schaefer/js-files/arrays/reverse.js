
function reverse (array){
    const memory = []
    for (let i = 0; i < array.length; i++){
        memory[array.length-1-i] = array[i]
    }

    for (let i = 0; i < memory.length; i++){
        array[i] = memory[i]
    }

    return memory
}