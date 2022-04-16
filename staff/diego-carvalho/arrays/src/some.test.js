
console.log('TEST some')

{
    console.log('CASE 01')

    let numbers = [ 1, 5, 7, 12, 26 ]

    const biggerThan20 = some(numbers, function(elem){
        return elem > 20
    })

    console.assert(biggerThan20 === true)

}

{ 
    console.log('CASE 02')

    let names = ['miguel','juan ','leo','jordi', 'diego']

    const myName = some(names, function(elem){
        return elem === 'diego'
    })

    console.assert(myName === true)


}

{
    console.log('CASE: 3')

    const num = [1, 2, 3, 4, 5, 6]


    const n = some(num, function (elem) {
        return elem % 2 == 0
    })

    console.assert(n === true)
}


/*
function some() {
    for (let i = 0; i < myName.length; i++) {
       if (myName[3] === 'leo') {

           return true

       } else {
           return false
       }
        
    }
    
}
*/