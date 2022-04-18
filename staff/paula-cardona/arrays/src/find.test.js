console.log ('TEST find')


{
console.log ("CASE 1")

    const array = ["hola" , "silla", "1", "playa"]
    const result = find (array, function(element){
   return element === 'silla'
})


 console.assert(result=== "silla")

}
{
    console.log ("CASE 2")
    
    const array = ["hola" , "silla", "1", "playa"]
    const result = find (array, function(element){
        return element === 'madera'
})


 console.assert(result=== undefined)
}

