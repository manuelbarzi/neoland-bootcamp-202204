console.log('TEST FIND')

{

console.count('Case find')
const array1 = [5, 12, 8, 130, 44];

const found = find(array1, function (element, index) {
    return element > 10
})

console.assert(found === 12)

// expected output: 12
}

