
console.log('TEST pop')

{
    console.log('CASO 1')

    let myPets = ['dog', 'cat', 'fish', 'bird'];

    let myPetsPop = myPets.pop();

    console.assert(myPetsPop === 'bird'); // 'bird'
}

{
    console.log('CASO 2')

    let number = [10, 14, 20, 24, 30, 34];

    let myAge = number.pop();

    console.assert(myAge === 34)

    console.assert(number.length === 5)
}

{
    console.log('CASO 3')

    const number = [10, 14, 20, 24, 30, 34];

    function pop() {
        const remove = number [number.length -1]

        return remove 

    
    }

    console.assert(pop())


}
