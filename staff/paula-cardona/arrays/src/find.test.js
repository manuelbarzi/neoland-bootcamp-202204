/*The find() method returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.
arr.find(callback(element[, index[, array]])*/

describe ('find', function(){
    it ('element appears', function(){
    const array = ['hola', 'silla', 1, 'playa']
    const result= find(array, function callback(element){
        return element==='silla' //compara si el elemento es igual a silla
    } ) //devuelve true o false
    expect(result).toBe('silla')

    })
})



























/*

describe('find', function() {

    it('select elements bigger than..', function() {
        const nums = [8, 3, 6, 4, 12, 9, 2, 1 , 13, 3, 4]
        let n = 4

        
        const result = find(nums, function(elem){ // le enviamos el array y la funcion
            return elem > n        
        })
        expect(result).toBe(8)
    })

    it('select even numbers', function() {
        const num2 = [3, 6, 4, 12, 9, 2, 1, 13, 3, 4]

   
        const result = find(num2, function(elem){ // le enviamos el array y la funcion
            return elem%2===0   
        })
        expect(result).toBe(6)
    })
    
})
/*




/*console.log ('TEST find')


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
}*/

