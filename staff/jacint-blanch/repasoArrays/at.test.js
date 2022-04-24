console.log('Test At')

{
    console.log('Positive Index')

    const numbers = [5, 12, 8, 130, 44];

    const item = at(numbers, 2)

    console.assert(item === 8)
}

{
console.log('Negative Index')

const numbers = [5, 12, 8, 130, 44];

const item = at(numbers, -2)

console.assert(item === 130)
}