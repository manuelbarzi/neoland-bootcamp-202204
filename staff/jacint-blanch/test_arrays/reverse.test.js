console.log('Test reverse')

{
    console.log('Case')

    const fruits = ["Banana", "Orange", "Mango"]

    reverse(fruits)

    const expected = ["Mango", "Orange", "Banana"]


    for(index in fruits) {
        console.assert(fruits[index] === expected[index])
    }
 
    
}