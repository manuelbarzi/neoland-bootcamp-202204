
function customPush(){
    array=arguments[0]
    for(let i=0; i<arguments.length-1; i++)
        array[array.length]=arguments[i+1]

    return array.length
}